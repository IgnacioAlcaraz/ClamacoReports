const jwt = require('jsonwebtoken');
const { logSecurity } = require('../utils/logger');

const getIp = (req) =>
  req.ip ||
  req.headers['x-nf-client-connection-ip'] ||
  (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
  'unknown';

function verifyToken(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: 'No autenticado' });
  }

  try {
    // Valida firma, expiración, issuer y audience — rechaza tokens de otros servicios
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      issuer: 'clamaco',
      audience: 'clamaco-web',
    });
    req.user = decoded;
    next();
  } catch (err) {
    logSecurity('invalid_token', { ip: getIp(req), reason: err.message });
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

module.exports = { verifyToken };
