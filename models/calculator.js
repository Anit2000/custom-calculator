const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  calculator: {
    type: mongoose.Types.ObjectId,
    ref: "Calculator",
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});

const productSchema = new mongoose.Schema({
  calculator: {
    type: mongoose.Types.ObjectId,
    ref: "Calculator",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  }
})

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
const Size = mongoose.model("Size", sizeSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = { Calculator, Size, Product };
