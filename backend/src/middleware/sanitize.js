// Sanitiza strings entrantes: elimina tags HTML y caracteres de control peligrosos.

function stripHtml(str) {
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[\x00-\x08\x0B\x0E-\x1F\x7F]/g, '')
    .trim();
}

function sanitizeString(obj, key) {
  if (obj && typeof obj[key] === 'string') {
    obj[key] = stripHtml(obj[key]);
  }
}

// Middleware que sanitiza todos los campos string del body
function sanitizeInputs(req, _res, next) {
  if (req.body && typeof req.body === 'object') {
    // Campos de auth
    sanitizeString(req.body, 'username');
    sanitizeString(req.body, 'password');

    // Campos de chat (no sanitizamos los hex del encryptedMessage —
    // son validados por express-validator como hexadecimal)
    sanitizeString(req.body, 'area');
    sanitizeString(req.body, 'sessionId');
  }
  next();
}

module.exports = { sanitizeInputs };
