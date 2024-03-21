const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const sendContactFormEmail = require('./src/services/sendContactFormEmail');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json({ limit: '26mb' }));

  server.get('/status', (req, res) => {
    res.json({ status: 'ok' });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(process.env.PORT || 3044, (err) => {
    if (err) throw err;
    console.log(`> Listen on http://localhost:${process.env.PORT || 3044}`);
  });

  server.post('/api/contact', (req, res) => {
    sendContactFormEmail(req, res);
  });
});
