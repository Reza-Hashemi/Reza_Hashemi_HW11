const express = require('express');
const app = express();
const users = require('./users');

app.use('/user',users)

app.listen(2021);