export default async function getShopifyProducts(page) {
  console.log(page);
  let data = await fetch(
    `/calculators/shopify-products${page ? "?page=" + page : ""}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}
