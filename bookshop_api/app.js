const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");

//import API
const indexRouter = require("./routers/index");
const userRouter = require("./routers/user");
const orderRouter = require("./routers/order");
const productRouter = require("./routers/product");
const apiUserRouter = require("./routers/API/apiUser");
const apiBookRouter = require("./routers/API/apiProduct");
const apiOrderRouter = require("./routers/API/apiOrder");

//middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(fileUpload());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setup and connect database mongoDB, server
const server = "127.0.0.1:27017";
const database = "my_bookshop";
mongoose
  .connect(`mongodb://${server}/${database}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Database connection successfull");
    app.listen(5000, (req, res) => {
      console.log("server is running on PORT 5000");
    });
  })
  .catch((err) => {
    console.error("Databade connection error");
  });

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/book", productRouter);
app.use("/api/user", apiUserRouter);
app.use("/api/book", apiBookRouter);
app.use("/api/order", apiOrderRouter);
