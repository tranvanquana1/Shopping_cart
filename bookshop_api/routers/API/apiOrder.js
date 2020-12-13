const express = require("express");
const router = express.Router();
const Order = require("../../models/orderModel");

router.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.get("/", (req, res, next) => {
  Order.find({})
    .then((order) => {
      res.send(order);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/", (req, res, next) => {
  Order.create(req.body)
    .then((order) => {
      res.send(order);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
