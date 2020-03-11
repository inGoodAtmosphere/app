const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const { router } = express;

router.get('/', (req, res) => {
  return app.render(req, res, '/', req.query);
});

router.get('/kampania', (req, res) => {
  return app.render(req, res, '/kampania', req.query);
});
router.get('/o-nas', (req, res) => {
  return app.render(req, res, '/o-nas', req.query);
});
router.get('/encyklopedia', (req, res) => {
  return app.render(req, res, '/encyklopedia', req.query);
});
router.get('/mierniki', (req, res) => {
  return app.render(req, res, '/mierniki', req.query);
});
router.get('/kontakt', (req, res) => {
  return app.render(req, res, '/kontakt', req.query);
});
router.get('/polityka-prywatnosci', (req, res) => {
  return app.render(req, res, '/polityka-prywatnosci', req.query);
});
