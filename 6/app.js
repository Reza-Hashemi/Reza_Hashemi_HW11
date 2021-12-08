const express = require('express');
const page = require('./page');
const app = express();

app.use('/page',page);
app.listen(2021);