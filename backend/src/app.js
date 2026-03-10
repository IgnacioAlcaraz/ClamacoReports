require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const { globalLimiter } = require('./middleware/rateLimiter');
const { sanitizeInputs } = require('./middleware/sanitize');

const app = express();
// CONTEXT es seteado por Netlify en function runtime ('production', 'deploy-preview', etc.)
// Si CONTEXT está presente, siempre es producción (aunque NODE_ENV sea 'development').
// Localmente CONTEXT no existe, así que se usa NODE_ENV.
const isProd = process.env.CONTEXT != null || process.env.NODE_ENV !== 'development';

// En Netlify (y otros proxies), confiar en X-Forwarded-For para que req.ip funcione
// correctamente en el rate limiter y otros middlewares.
app.set('trust proxy', 1);

// ── Security headers ──────────────────────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    hsts: isProd ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    permittedCrossDomainPolicies: { permittedPolicies: 'none' },
    crossOriginEmbedderPolicy: false,
  })
);

// ── CORS ──────────────────────────────────────────────────────────────────────
// process.env.URL y process.env.DEPLOY_URL son seteados automáticamente por Netlify
const allowedOrigins = isProd
  ? [process.env.FRONTEND_URL, process.env.URL, process.env.DEPLOY_URL, process.env.DEPLOY_PRIME_URL]
      .filter(Boolean)
      .map((u) => u.replace(/\/$/, ''))
  : ['http://localhost:5173', 'http://127.0.0.1:5173'];

if (isProd) {
  console.log('[CORS] allowedOrigins:', allowedOrigins);
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (isProd) {
        console.log('[CORS] incoming origin:', origin);
        // Permitir mismo dominio (origin puede no venir en requests same-origin)
        // Si allowedOrigins está vacío (env vars no cargadas), bloquear y loguear
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          console.log('[CORS] BLOCKED origin:', origin, '| allowed:', allowedOrigins);
          callback(new Error('Not allowed by CORS'));
        }
      } else {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      }
    },
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// ── Body & cookies ────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// ── HTTP Parameter Pollution prevention ──────────────────────────────────────
app.use(hpp());

// ── Rate limit global ─────────────────────────────────────────────────────────
app.use('/api', globalLimiter);

// ── Sanitización de inputs ────────────────────────────────────────────────────
app.use('/api', sanitizeInputs);

// ── Ocultar cabecera X-Powered-By ────────────────────────────────────────────
app.disable('x-powered-by');

// ── API routes ────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// ── Rechazar rutas API no existentes ─────────────────────────────────────────
app.use('/api/*', (_req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  if (isProd) {
    res.status(500).json({ error: 'Error interno del servidor' });
  } else {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
