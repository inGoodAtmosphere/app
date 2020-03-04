const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// ROUTERS
const websiteRouter = require("./routes/website.js"); // Router of next.js
const apiRouter = require("./routes/api.js"); // API

app.prepare().then(() => {
  const server = express();

  // Routers as middleware
  server.use('/routes', websiteRouter);
  server.use('/routes', apiRouter);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
