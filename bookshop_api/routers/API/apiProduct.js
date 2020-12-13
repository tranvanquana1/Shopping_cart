const express = require("express");
const router = express.Router();
const Book = require("../../models/bookModel");

router.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.get("/", (req, res, next) => {
  Book.find({})
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/:category", (req, res, next) => {
  const category = req.params.category;
  Book.find({ category: category })
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/page/:number", (req, res, next) => {
  const perPage = 6;
  const pageNumber = req.params.number;

  Book.find({})
    .skip(perPage * pageNumber - perPage)
    .limit(perPage)
    .exec((err, items) => {
      Book.countDocuments((err, cout) => {
        if (err) return next(err);
        res.send(items);
      });
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Book.findById(id)
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
