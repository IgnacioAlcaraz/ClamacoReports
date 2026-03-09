const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10,
  message: { error: 'Demasiados intentos de login. Intenta de nuevo en 15 minutos.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const chatLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 20,
  message: { error: 'Demasiados mensajes. Espera un momento.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { authLimiter, chatLimiter };
