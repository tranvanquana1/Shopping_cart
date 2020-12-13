const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  res.render("login");
});

router.post("/", (req, res, next) => {
  const { username, password, author } = req.body;
  console.log(password);
  User.findOne({ username: username, author: 1 }).then((user) => {
    bcrypt.compare(password, user.password, (err, same) => {
      if (same) {
        res.redirect("/order");
      } else {
        res.redirect("/");
      }
    });
  });
});

module.exports = router;
