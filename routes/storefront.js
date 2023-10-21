const express = require('express');
const route = express.Router();
const { Calculator, Size, Product } = require("../models/calculator");
const mongoose = require("mongoose");
const { createVariant } = require("../controller/storefront");

route.post("/", async (req, res) => {
    let { width, height, productId } = req.body;
    let area = Number(width) * Number(height);
    try {
        let product = await Product.findOne({ productId: productId });
        let calculator = await Calculator.findById(product.calculator);
        let sizes = await Size.find({ calculator: product.calculator })
        sizes = sizes.map(el => ({ area: el.height * el.width, ...el })).sort((s1, s2) => s1.area - s2.area);
        let relevantSize = sizes.find(size => area <= size.area);
        let pricePerSize = relevantSize.area / relevantSize._doc.price;
        let calcAreaPrice = area * pricePerSize;
        let variant = await createVariant(productId, calcAreaPrice, calculator.user);
        res.json({ variant }).status(200);
    } catch (err) {
        res.json({
            ok: false,
            message: err.message
        }).status(401)
    }

    // let calculators = await Calculator.find({ user: userId });

    // let sizesPrm = calculators.map(calc => new Promise(async (resolve, reject) => {
    //     let sizes = await Size.find({ calculator: calc._id })
    //     resolve(sizes)
    // }));
    // /// sroting required for this step
    // let sizeData = await Promise.all(sizesPrm).then(values => values.flat());
    //
    // console.log(sizeData)
    // let fitData = sizeData.find(size => area <= (size.height * size.width));
    // let calPrice = area * fitData.price;

})
route.get("/", (req, res) => {
    console.log('hit')
    res.send({
        ok: 'storefront'
    })
})
module.exports = route;