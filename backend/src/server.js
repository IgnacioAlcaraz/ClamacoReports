require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');
const path = require('path');

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const { globalLimiter } = require('./middleware/rateLimiter');
const { sanitizeInputs } = require('./middleware/sanitize');

const app = express();
const PORT = process.env.PORT || 3001;
const isProd = process.env.NODE_ENV === 'production';

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
    crossOriginEmbedderPolicy: false, // compatibilidad con Vite dev
  })
);

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigins = isProd
  ? [process.env.FRONTEND_URL].filter(Boolean)
  : ['http://localhost:5173', 'http://127.0.0.1:5173'];

app.use(
  cors({
    origin: (origin, callback) => {
      // En producción exigir origin (bloquea curl/Postman sin origin)
      // En desarrollo permitir sin origin para facilitar pruebas locales
      if (isProd) {
        if (origin && allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
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

// ── Serve React build in production ──────────────────────────────────────────
if (isProd) {
  const publicDir = path.join(__dirname, '..', 'public');
  app.use(express.static(publicDir, { dotfiles: 'deny' }));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });
}

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  // No exponer detalles del error en producción
  if (isProd) {
    res.status(500).json({ error: 'Error interno del servidor' });
  } else {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
});
