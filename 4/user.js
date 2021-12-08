const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

let data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "list.json"), "utf-8")
);
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
let response = [];
router.post("/getuser", function (req, res) {
  let inputUsername = req.body.username;
  let checkUsername = data.filter((user) => user.username === inputUsername);
  if (checkUsername.length == 0) {
    response.push("username does not exist");
  } else {
    response.push(checkUsername);
  }
  res.send(response);
});

module.exports = router;
