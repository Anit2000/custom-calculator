const Shopify = require("shopify-api-node");
const mongoose = require("mongoose");
const { Calculator, Size, Product } = require("../models/calculator");
const shopify = new Shopify({
  shopName: "my-test-store-it-is",
  accessToken: "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",
});
const getProducts = async (req, res) => {
  let page = req.query.page;
  try {
    const products = await shopify.product.list({
      limit: 10,
      fields: ["title", "handle", "id", "image"],
      page_info: page,
    });
    res.status(201).json({
      ok: true,
      products: products,
      page: {
        prev: products.previousPageParameters,
        next: products.nextPageParameters,
      },
    });
  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message,
    });
  }
};

const searchProduct = async (req, res) => {
  let query = req.query.search.toLowerCase();
  let hasNext = true;
  let page = null;
  try {
    while (hasNext) {
      let requestOptions = {
        limit: 250,
        fields: ["title", "handle", "id", "image"],
      };
      page ? (requestOptions["page_info"] = page) : "";
      const products = await shopify.product.list(requestOptions);
      let searchedProduct = products.find((prd) =>
        prd.title.toLowerCase().includes(query)
      );
      if (!searchedProduct && products.nextPageParameters) {
        page = products.nextPageParameters.page_info;
      } else {
        hasNext = false;
        searchedProduct
          ? res.status(201).json({ ok: true, ...searchedProduct })
          : res.status(400).json({ ok: false });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const addNewCalculator = async (req, res) => {
  const { title } = req.body;
  try {
    let data = await Calculator({ title: title }).save();
    res.json(data).status(200);
  } catch (err) {
    res
      .json({
        ok: false,
        message: err.message,
      })
      .status(201);
  }
};

const deleteCalculator = async (req, res) => {
  const { id } = req.body;
  try {
    let data = await Calculator.findByIdAndDelete(id);
    let sizes = await Size.find({ calculator: id });
    let deleteSizes = await Promise.all(sizes.map(el => Size.findByIdAndDelete(el._id)));
    let calculators = await Calculator.find({});
    res.json(calculators).status(200);
  } catch (err) {
    res.json({
      ok: false,
      message: err.message
    }).status(400);
  }
}

const listCalculators = async (req, res) => {
  try {
    let calculators = await Calculator.find({});
    res.json(calculators).status(200);
  } catch (err) {
    res
      .json({
        ok: false,
        message: err.message,
      })
      .status(201);
  }
};
const getCalculator = async (req, res) => {
  let id = new mongoose.Types.ObjectId(req.query.id);
  try {
    let calculator = await Calculator.findById(id);
    console.log(calculator);
    res
      .json({
        ok: true,
        calculator,
      })
      .status(200);
  } catch (err) {
    res
      .json({
        ok: false,
        message: err.message,
      })
      .status(201);
  }
};
const addNewSizes = async (req, res) => {
  let sizes = req.body;
  let calculatorId = sizes[0].calculator;
  let savePromises = sizes.map(el => Size(el).save());
  try {
    let savedData = await Promise.all(savePromises);
    let sizesData = await Size.find({ calculator: calculatorId });
    res.json({ ok: true, sizes: sizesData }).status(200);
  } catch (err) {
    res.json({ ok: false, message: err.message }).status(400);
  }
}
const getSizes = async (req, res) => {
  let calculatorId = req.query.id;
  try {
    let sizesData = await Size.find({ calculator: calculatorId });
    res.json({ ok: true, sizes: sizesData }).status(200);
  } catch (err) {
    res.json({ ok: false, message: err.message }).status(400);
  }
}
const editSize = async (req, res) => {
  let data = req.body;
  try {
    let updatedSize = await Size.findByIdAndUpdate(data.id, { height: data.height, width: data.width, price: data.price });
    let sizesData = await Size.find({ calculator: data.calculator });
    res.json({ ok: true, sizes: sizesData }).status(200);
  } catch (err) {
    res.json({ ok: false, message: err.message }).status(400);
  }
}
const deleteSize = async (req, res) => {
  let { id, calculator } = req.body;
  try {
    let deleteSize = await Size.findByIdAndDelete(id);
    let sizesData = await Size.find({ calculator: calculator });
    console.log(sizesData);
    res.json({ ok: true, sizes: sizesData }).status(200);
  } catch (err) {
    res.json({ ok: false, message: err.message }).status(400);
  }
}

const addNewProductCalc = async (req, res) => {
  let products = req.body;
  let calculatorId = products[0].calculator;
  let savePromises = products.map(el => Product(el).save());
  try {
    let savedData = await Promise.all(savePromises);
    let productsData = await Product.find({ calculator: calculatorId });
    res.json({ ok: true, products: productsData }).status(200);
  } catch (err) {
    res.json({ ok: false, message: err.message }).status(400);
  }
}
module.exports = {
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
};
