const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// ROUTERS
const apiRouter = require('./src/pages/api/api.js'); // API
const websiteRouter = require('./routes/website.js'); // Router of next.js

app.prepare().then(() => {
  const server = express();

  // Routers as middleware
  server.use('/routes', websiteRouter);
  server.use('/pages/api', apiRouter);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
