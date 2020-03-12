// const express = require('express');

// const {router} = express;

const requests = [];
let emptyRequests = 0;

export default (req, res) => {
  if(req.body ==="clear"){
    requests.slice(0,requests.length);
    emptyRequests=0;
  }
  else if(req.body==="") emptyRequests+=1;
  else requests.push(req.body)
  res.send(`${emptyRequests}\r\n${requests}`);
};
