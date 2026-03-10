const path = require('path');
const app = require('./app');

const PORT = process.env.PORT || 3001;
const isProd = process.env.NODE_ENV === 'production';

// ── Serve React build in production ──────────────────────────────────────────
if (isProd) {
  const publicDir = path.join(__dirname, '..', 'public');
  const express = require('express');
  app.use(express.static(publicDir, { dotfiles: 'deny' }));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
});
