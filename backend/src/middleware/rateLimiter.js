const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

// ── Auth: 5 intentos / 15 min ─────────────────────────────────────────────────
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Demasiados intentos de login. Espera 15 minutos.' },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // no penaliza logins exitosos
});

// Ralentiza progresivamente antes del bloqueo total
const authSlowDown = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 2,
  delayMs: (hits) => hits * 500, // +500ms acumulativo por intento extra
});

// ── Chat: 30 mensajes / min por usuario ───────────────────────────────────────
const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: 'Demasiados mensajes. Espera un momento.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Global: 200 req / 15 min por IP ──────────────────────────────────────────
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'Demasiadas solicitudes. Intenta más tarde.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { authLimiter, authSlowDown, chatLimiter, globalLimiter };
