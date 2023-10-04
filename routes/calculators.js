const express = require("express");
const route = express.Router();
const { getProducts, searchProduct } = require("../controller/calculator");

route.get("/shopify-products", getProducts);
route.get("/search-product", searchProduct);

module.exports = route;
