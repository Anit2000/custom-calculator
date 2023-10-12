const express = require("express");
const route = express.Router();
const {
  getProducts,
  searchProduct,
  addNewCalculator,
  listCalculators,
  getCalculator,
  addNewSizes,
  getSizes,
  editSize,
  deleteSize,
  deleteCalculator
} = require("../controller/calculator");

route.get("/shopify-products", getProducts);
route.get("/search-product", searchProduct);
route.get("/list-calculator", listCalculators);
route.get("/get-calculator", getCalculator);
route.post("/add-calculator", addNewCalculator);
route.post("/delete-calculator", deleteCalculator);
route.post("/add-sizes", addNewSizes);
route.post("/edit-size", editSize);
route.post("/delete-size", deleteSize);
route.get("/sizes", getSizes);


module.exports = route;
