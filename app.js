const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
const path = require('path');
const rootDir = require('./util/path');
app.use(express.static(path.join(rootDir,'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use("/",(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','404.html'));
})
app.listen(3000);