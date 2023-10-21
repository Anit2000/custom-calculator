const Shopify = require("shopify-api-node");
const Settings = require("../models/settings");
const randomstring = require("randomstring");

async function createShopifyInstance(userId) {
    let settingsData = await Settings.find({ user: userId });
    return new Shopify({ shopName: settingsData[0].domain, accessToken: settingsData[0].accessToken })
}

async function createVariant(productId, price, userId) {
    let shopify = await createShopifyInstance(userId);
    try {
        let variantTitle = 'calculator-' + randomstring.generate(7);
        let variant = await shopify.productVariant.create(`${productId}`, {
            "price": `${Number(price).toFixed(2)}`,
            "option1": variantTitle
        })
        return variant
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    createShopifyInstance,
    createVariant
}