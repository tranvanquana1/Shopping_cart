const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");

router.get("/", (req, res, next) => {
  Order.find({}, (err, order) => {
    if (err) {
      console.error(err);
    } else {
      res.render("order/listOrders", { data: order });
    }
  });
});

router.get("/history", (req, res, next) => {
  Order.find({ status: false }, (err, order) => {
    if (err) {
      console.error(err);
    } else {
      res.render("order/historyOrder", { data: order });
    }
  });
});

router.get("/delete/:id", (req, res, next) => {
  Order.findByIdAndDelete(req.params.id, (err, order) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect("/order");
    }
  });
});
module.exports = router;
