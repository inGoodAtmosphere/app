const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

// ROUTERS
const websiteRouter = require("./routes/website.js");
const apiRouter = require("./routes/api.js");

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
