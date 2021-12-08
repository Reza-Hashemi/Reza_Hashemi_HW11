const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
router.use(express.static(path.join(__dirname, "public")));

router.get('/',function(req,res){
    res.send();
})

module.exports = router;