const express = require("express");
const router = express.Router();
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");

router.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          res.json({ user: user });
        } else {
          console.error(err);
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/", (req, res, next) => {
  const { username, name, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({ username: username, name: name, password: hash })
      .then((user) => res.json(user))
      .catch((err) => console.error(err));
  });
});

router.post("/edit/:id", (req, res, next) => {
  const id = req.params.id;
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.findByIdAndUpdate(id, {
        username: req.body.username,
        password: hash,
      })
        .then((user) => {
          res.json(user);
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
