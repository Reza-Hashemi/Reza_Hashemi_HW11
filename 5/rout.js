const express = require('express');
const router = express.Router();


router.get('/1',function(req,res){
    res.sendFile('D:/project/HW11/5/html/index1.html')
});
router.get('/2',function(req,res){
    res.sendFile('D:/project/HW11/5/html/index2.html')
})
router.get('/3',function(req,res){
    res.sendFile('D:/project/HW11/5/html/index3.html')
})
router.get('/4',function(req,res){
    res.sendFile('D:/project/HW11/5/html/index4.html')
})
router.get('/5',function(req,res){
    res.sendFile('D:/project/HW11/5/html/index5.html')
})

module.exports = router;