const express = require('express');
const router = require('./rout.js');
const app = express();

app.use('/pages',router);
app.listen(2021);