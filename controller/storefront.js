const Shopify = require("shopify-api-node");
const Settings = require("../models/settings");

async function createShopifyInstance(userId) {
    let settingsData = await Settings.find({ user: userId });
    return new Shopify({ shopName: settingsData[0].domain, accessToken: settingsData[0].accessToken })
}

async function createVariant(productId, price, userId) {
    let shopify = await createShopifyInstance(userId);
    try {

        let product = await shopify.productVariant.create(productId, {
            price: '100.00',
            title: "tttt",
        });
        console.log(product)
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    createShopifyInstance,
    createVariant
}