const Shopify = require("shopify-api-node");

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
    console.log(products.nextPageParameters);
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
  let query = req.query.search;
  console.log(query);
  let hasNext = true;
  let page = "";
  try {
    while (hasNext) {
      const products = await shopify.product.list({
        limit: 10,
        fields: ["title", "handle", "id", "image"],
        page_info: page,
      });
      let searchedProducts = products.filter((prd) =>
        prd.title.toLowerCase().includes(query)
      );
      if (searchedProducts.length == 0 && products.nextPageParameters) {
        page = products.nextPageParameters;
      } else {
        hasNext = false;
      }
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getProducts,
  searchProduct,
};
