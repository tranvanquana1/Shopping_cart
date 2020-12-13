const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user: Object,
  product_list: {
    type: Array,
    required: true,
  },
  bill: Number,
  createDay: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
