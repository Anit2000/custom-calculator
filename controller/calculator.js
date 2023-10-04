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
      page ? requestOptions["page_info"] = page : "";
      const products = await shopify.product.list(requestOptions);
      let searchedProduct = products.find((prd) =>
        prd.title.toLowerCase().includes(query)
      );
      if (!searchedProduct && products.nextPageParameters) {
        page = products.nextPageParameters.page_info;
      } else {
        hasNext = false;
        searchedProduct ? res.status(201).json({ok: true,...searchedProduct}) : res.status(400).json({ok : false});
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
