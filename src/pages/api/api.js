// const express = require('express');

// const {router} = express;

const requests = [];

export default (req, res) => {
  requests.push(req.body);
  res.send(requests);
};
