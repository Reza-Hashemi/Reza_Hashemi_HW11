const express = require('express');
const router = express.Router();

router.get('/create',function(req,res){
    res.send("create user")
})
router.get('/update',function(req,res){
    res.send("update user")
})

module.exports = router;