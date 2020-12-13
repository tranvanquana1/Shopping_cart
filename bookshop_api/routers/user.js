const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
    } else {
      res.render("users/listUsers", { data: users });
    }
  });
});

router.get("/deleteuser/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (!err) {
      res.redirect("/user");
    } else {
      console.error(err);
    }
  });
});

module.exports = router;
