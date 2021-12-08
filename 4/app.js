const express = require('express');
const app = express();
const admin = require('./admin');
const user = require('./user');
app.use('/user',user);
app.use('/admin',admin);
app.listen(2021);