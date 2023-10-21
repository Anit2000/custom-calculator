const express = require('express');
const route = express.Router();
const { Calculator, Size, Product } = require("../models/calculator");
const mongoose = require("mongoose");
const { createVariant } = require("../controller/storefront");

route.post("/", async (req, res) => {
    let { width, height, userId, productId } = req.body;
    let area = Number(width) * Number(height);
    let calculators = await Calculator.find({ user: userId });
    let sizesPrm = calculators.map(calc => new Promise(async (resolve, reject) => {
        let sizes = await Size.find({ calculator: calc._id })
        resolve(sizes)
    }));
    /// sroting required for this step
    let sizeData = await Promise.all(sizesPrm).then(values => values.flat());
    //
    let fitData = sizeData.find(size => area <= (size.height * size.width));
    let calPrice = area * fitData.price;
    createVariant(productId, calPrice, userId);
})
route.get("/", (req, res) => {
    console.log('hit')
    res.send({
        ok: 'storefront'
    })
})
module.exports = route;