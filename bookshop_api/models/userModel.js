const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    default: "130199",
  },
  sex: {
    type: String,
    default: "LGBT",
  },
  phone: {
    type: String,
    default: "123456789",
  },
  address: {
    type: String,
    default: "Ha Nam",
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: Number,
    default: 2,
  },
});

UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", UserSchema);
