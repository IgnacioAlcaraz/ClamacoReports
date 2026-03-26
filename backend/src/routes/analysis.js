const express = require('express');
const { body, validationResult } = require('express-validator');
const { verifyToken } = require('../middleware/authMiddleware');
const { chatLimiter } = require('../middleware/rateLimiter');
const { graph } = require('../graph/analysisGraph');

const router = express.Router();

// POST /api/analysis/generate
router.post(
  '/generate',
  verifyToken,
  chatLimiter,
  [
    body('reportContext').isObject().withMessage('reportContext requerido'),
    body('reportContext.periodo').isString().notEmpty().withMessage('periodo requerido'),
    body('reportContext.obras').isObject().withMessage('datos de obras requeridos'),
    body('reportContext.comercial').isObject().withMessage('datos de comercial requeridos'),
    body('reportContext.finanzas').isObject().withMessage('datos de finanzas requeridos'),
    body('reportContext.cx').isObject().withMessage('datos de cx requeridos'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(503).json({ error: 'El servicio de análisis no está configurado.' });
    }

    const { reportContext } = req.body;

    try {
      const finalState = await graph.invoke({
        periodo: reportContext.periodo,
        areas: {
          obras:     reportContext.obras,
          comercial: reportContext.comercial,
          finanzas:  reportContext.finanzas,
          cx:        reportContext.cx,
        },
      });

      return res.json({ result: finalState.result });
    } catch (err) {
      console.error('Error en análisis LangGraph:', err.message);
      return res.status(502).json({ error: 'No se pudo generar el análisis. Intenta nuevamente.' });
    }
  }
);

module.exports = router;
