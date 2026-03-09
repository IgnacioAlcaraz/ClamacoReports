const express = require('express');
const fetch = require('node-fetch');
const { body, validationResult } = require('express-validator');
const { verifyToken } = require('../middleware/authMiddleware');
const { chatLimiter } = require('../middleware/rateLimiter');
const { decrypt } = require('../utils/encryption');

const router = express.Router();

const VALID_AREAS = ['obras', 'comercial', 'finanzas', 'cx'];

function getWebhookUrl(area) {
  return process.env[`WEBHOOK_${area.toUpperCase()}`] || null;
}

// POST /api/chat/send
router.post(
  '/send',
  verifyToken,
  chatLimiter,
  [
    body('area').trim().toLowerCase().isIn(VALID_AREAS).withMessage('Área no válida'),
    // El mensaje llega encriptado: { iv, ciphertext, tag }
    body('encryptedMessage').isObject().withMessage('Payload inválido'),
    body('encryptedMessage.iv').isHexadecimal().isLength({ min: 24, max: 24 }),
    body('encryptedMessage.ciphertext').isHexadecimal().isLength({ max: 8000 }), // max ~4000 chars desencriptados
    body('encryptedMessage.tag').isHexadecimal().isLength({ min: 32, max: 32 }),
    body('sessionId').optional().trim().isAlphanumeric().isLength({ max: 64 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { area, encryptedMessage, sessionId } = req.body;

    // Desencriptar el mensaje con la clave derivada del usuario
    let message;
    try {
      message = decrypt(encryptedMessage, req.user.username);
    } catch {
      return res.status(400).json({ error: 'No se pudo desencriptar el mensaje.' });
    }

    if (!message || message.length > 2000) {
      return res.status(400).json({ error: 'Mensaje vacío o demasiado largo.' });
    }

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

      const rawText = await n8nResponse.text();
      let reply = null;

      try {
        const data = JSON.parse(rawText);
        const item = Array.isArray(data) ? data[0] : data;
        reply =
          item?.output ||
          item?.message ||
          item?.text ||
          item?.response ||
          (typeof data === 'string' ? data : null);
      } catch {
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
