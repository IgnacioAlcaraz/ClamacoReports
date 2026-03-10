const serverless = require('serverless-http');
const app = require('../../backend/src/app');

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  // Derivar FRONTEND_URL del hostname del request para CORS dinámico.
  // Las variables automáticas de Netlify (URL, CONTEXT) solo están en build time,
  // no en function runtime. Usamos rawUrl como fuente confiable del origen.
  if (event.rawUrl && !process.env.FRONTEND_URL) {
    try {
      const url = new URL(event.rawUrl);
      process.env.FRONTEND_URL = `${url.protocol}//${url.hostname}`;
    } catch (_) {}
  }

  // Restore original request path so Express routes (/api/auth, /api/chat) match correctly
  if (event.rawUrl) {
    try {
      event.path = new URL(event.rawUrl).pathname;
    } catch (_) {}
  }

  return handler(event, context);
};
