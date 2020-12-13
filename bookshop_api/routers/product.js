const express = require("express");
const router = express.Router();
const Product = require("../models/bookModel");
const path = require("path");

router.get("/", (req, res, next) => {
  Product.find({}, (err, product) => {
    if (err) {
      console.error(err);
    } else {
      res.render("products/listProduct", { data: product });
    }
  });
});

router.get("/edit/:id", (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      console.error(err);
    } else {
      res.render("products/editProduct", { data: product });
    }
  });
});

router.post("/edit/:id", (req, res, next) => {
  const image = req.files.imgURL;
  console.log(__dirname);
  image.mv(
    path.resolve(
      "D:/UET/Project Web/bookshop_api",
      "public/upload",
      image.name
    ),
    (err) => {
      Product.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          imgURL: "/upload/" + image.name,
        },
        (err, product) => {
          if (err) {
            console.error(err);
          } else {
            res.redirect("/book");
          }
        }
      );
    }
  );
});

router.get("/add", (req, res, next) => {
  res.render("products/addProduct");
});

router.post("/addbook", (req, res, next) => {
  const image = req.files.imgURL;
  console.log(__dirname);
  image.mv(
    path.resolve(
      "D:/UET/Project Web/bookshop_api",
      "public/upload",
      image.name
    ),
    (err) => {
      Product.create(
        {
          ...req.body,
          imgURL: "/upload/" + image.name,
        },

        (err, product) => {
          if (err) {
            console.error(err);
          } else {
            res.redirect("/book");
          }
        }
      );
    }
  );
});

router.get("/delete/:id", (req, res, next) => {
  Product.findByIdAndDelete(req.params.id, (err, product) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect("/book");
    }
  });
});

module.exports = router;
