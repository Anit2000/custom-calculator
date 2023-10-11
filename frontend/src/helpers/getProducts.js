export async function getShopifyProducts(page) {
  let data = await fetch(
    `/calculators/shopify-products${page ? "?page=" + page : ""}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}
export async function searchShopifyProduct(query) {
  let data = await fetch(`/calculators/search-product?search=${query}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}
