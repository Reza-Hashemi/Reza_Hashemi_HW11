const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
let data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "list.json"), "utf-8")
  );

router.get("/getallusers",function(req,res){
   res.send(data)
})

module.exports = router;