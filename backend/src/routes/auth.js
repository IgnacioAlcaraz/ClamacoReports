const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { authLimiter } = require('../middleware/rateLimiter');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Parse users from env: "user1:hash1,user2:hash2"
function getUsers() {
  const raw = process.env.USERS || '';
  const users = {};
  raw.split(',').forEach((entry) => {
    const idx = entry.indexOf(':');
    if (idx === -1) return;
    const username = entry.slice(0, idx).trim();
    const hash = entry.slice(idx + 1).trim();
    if (username && hash) users[username] = hash;
  });
  return users;
}

const isProd = process.env.NODE_ENV === 'production';

// POST /api/auth/login
router.post(
  '/login',
  authLimiter,
  [
    body('username').trim().notEmpty().isLength({ max: 50 }).escape(),
    body('password').notEmpty().isLength({ max: 100 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Datos inválidos' });
    }

    const { username, password } = req.body;
    const users = getUsers();
    const hash = users[username];

    // Use constant-time comparison to avoid timing attacks
    const validHash = hash || '$2b$10$invalidhashfortimingprotection00000000000000000000000';
    const match = await bcrypt.compare(password, validHash);

    if (!hash || !match) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }

    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: '8h', issuer: 'clamaco', audience: 'clamaco-web' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'strict' : 'lax',
      maxAge: 8 * 60 * 60 * 1000, // 8 horas
      path: '/',
    });

    return res.json({ ok: true, username });
  }
);

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie('token', { path: '/', httpOnly: true, secure: isProd, sameSite: isProd ? 'strict' : 'lax' });
  return res.json({ ok: true });
});

// GET /api/auth/me — verifica si la sesión sigue activa
router.get('/me', verifyToken, (req, res) => {
  return res.json({ ok: true, username: req.user.username });
});

module.exports = router;
