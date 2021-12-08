const express = require("express");
const app = express();
const path = require("path");

const user = require("./route/user.js");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use("/user", user);

app.listen(2021);
