const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
  price: {
    type: Number,
  },
});
const calculatorSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  products: {
    type: [String],
  },
  sizes: {
    type: [sizeSchema],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Calculator = mongoose.model("Calculator", calculatorSchema);

module.exports = Calculator;
