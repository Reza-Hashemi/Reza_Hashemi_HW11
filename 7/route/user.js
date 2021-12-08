const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
let data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "list.json"), "utf-8")
);
let message = {};
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post("/", function (req, res) {
  
  let userName = req.body.username;
  let userPassword = req.body.password;

  let checkUsername = data.filter((user) => user.username === userName);
  let checkPassword = checkUsername.filter(
    (user) => user.password === userPassword
  );
  if (checkUsername.length > 0 && checkPassword.length > 0) {
   message = ("username is correct");
   
  }else{
    message = ("username or password is incorrect");
  }
  res.end(message);
});

module.exports = router;
