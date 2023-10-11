const express = require("express");
const route = express.Router();
const {
  getProducts,
  searchProduct,
  addNewCalculator,
  listCalculators,
} = require("../controller/calculator");

route.get("/shopify-products", getProducts);
route.get("/search-product", searchProduct);
route.get("/list-calculator", listCalculators);
route.post("/add-calculator", addNewCalculator);

module.exports = route;
