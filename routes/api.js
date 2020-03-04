const express = require('express');

const {router} = express;

router.get("/api/test", (req, res) => {
    res.send("xd");
})