// Logging estructurado de eventos de seguridad.
// Escribe JSON a stdout — en Netlify/Render estos logs quedan en el dashboard del proveedor.

function logSecurity(event, details = {}) {
  const entry = {
    level: 'security',
    event,
    ...details,
    ts: new Date().toISOString(),
  };
  console.warn(JSON.stringify(entry));
}

module.exports = { logSecurity };
