const serverless = require('serverless-http');
const app = require('../../backend/src/app');

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  // Restore original request path so Express routes (/api/auth, /api/chat) match correctly
  if (event.rawUrl) {
    try {
      event.path = new URL(event.rawUrl).pathname;
    } catch (_) {}
  }
  return handler(event, context);
};
