const express = require('express');

let app = express();

app.get('/',function (req,res){
    res.sendFile('D:/project/HW11/2/html/index.html');
});
app.get('/style.css',function (req,res){
    res.sendFile('D:/project/HW11/2/html/style.css');
});
app.get('/main.js',function (req,res){
    res.sendFile('D:/project/HW11/2/html/main.js');
});
app.get('/photo_2021-12-02_12-08-09.jpg',function (req,res){
    res.sendFile('D:/project/HW11/2/html/photo_2021-12-02_12-08-09.jpg');
});
app.listen(2021)