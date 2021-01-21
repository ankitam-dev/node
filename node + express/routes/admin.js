const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

router = express.Router();

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add-products.html'));
});

router.post('/add-product',(req,res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;