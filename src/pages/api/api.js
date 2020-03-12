// const express = require('express');

// const {router} = express;

const requests = [];
let emptyRequests = 0;

export default (req, res) => {
  if(req.body ==="clear"){
    requests.slice(0,requests.length);
    emptyRequests=0;
  }
  else if(req.body==="") requests.push(req.body);
  else res.send(requests);
};
