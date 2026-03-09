const express = require('express');
const fetch = require('node-fetch');
const { body, validationResult } = require('express-validator');
const { verifyToken } = require('../middleware/authMiddleware');
const { chatLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Whitelist de áreas válidas — la clave debe coincidir exactamente
const VALID_AREAS = ['obras', 'comercial', 'finanzas', 'cx'];

function getWebhookUrl(area) {
  const envKey = `WEBHOOK_${area.toUpperCase()}`;
  return process.env[envKey] || null;
}

// POST /api/chat/send
router.post(
  '/send',
  verifyToken,
  chatLimiter,
  [
    body('area')
      .trim()
      .toLowerCase()
      .isIn(VALID_AREAS)
      .withMessage('Área no válida'),
    body('message')
      .trim()
      .notEmpty()
      .isLength({ min: 1, max: 2000 })
      .withMessage('Mensaje vacío o demasiado largo'),
    body('sessionId')
      .optional()
      .trim()
      .isAlphanumeric()
      .isLength({ max: 64 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { area, message, sessionId } = req.body;
    const webhookUrl = getWebhookUrl(area);

    if (!webhookUrl) {
      return res.status(503).json({ error: 'El webhook para esta área no está configurado aún.' });
    }

    try {
      const n8nResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          sessionId: sessionId || null,
          username: req.user.username,
          area,
        }),
        timeout: 30000,
      });

      if (!n8nResponse.ok) {
        console.error(`Webhook error [${area}]: HTTP ${n8nResponse.status}`);
        return res.status(502).json({ error: 'Error al comunicarse con el asistente. Intenta nuevamente.' });
      }

      // n8n puede responder con JSON o texto plano — manejamos ambos
      const rawText = await n8nResponse.text();
      let reply = null;

      try {
        const data = JSON.parse(rawText);
        // Soporta: { output }, { message }, { text }, { response }, o array [{ output }]
        const item = Array.isArray(data) ? data[0] : data;
        reply =
          item?.output ||
          item?.message ||
          item?.text ||
          item?.response ||
          (typeof data === 'string' ? data : null);
      } catch {
        // La respuesta es texto plano directamente
        reply = rawText.trim() || null;
      }

      if (!reply) {
        console.error(`Respuesta inesperada de n8n [${area}]:`, rawText);
        return res.status(502).json({ error: 'Respuesta inesperada del asistente.' });
      }

      return res.json({ reply });
    } catch (err) {
      console.error(`Error llamando webhook [${area}]:`, err.message);
      return res.status(502).json({ error: 'No se pudo contactar al asistente. Intenta más tarde.' });
    }
  }
);

module.exports = router;
