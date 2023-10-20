export async function getCalculators() {
  const data = await fetch("/calculators/list-calculator")
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => console.log(err))
  console.log(data);
  return data;
}
export async function getCalculator(id) {
  const data = await fetch("/calculators/get-calculator" + "?id=" + id)
    .then((res) => res.json())
    .then((data) => data)

  return data;
}
export async function deleteCalculator(id) {
  const data = await fetch("/calculators/delete-calculator", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
}

export async function addSizes(sizesData) {
  const data = await fetch("/calculators/add-sizes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sizesData),
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
}

export async function editSize(sizeData) {
  const data = await fetch("/calculators/edit-size", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sizeData),
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
}

export async function deleteSize(sizeData) {
  const data = await fetch("/calculators/delete-size", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sizeData),
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
}

export async function getSizes(id) {
  const data = await fetch("/calculators/sizes" + "?id=" + id)
    .then((res) => res.json())
    .then((data) => data);
  return data;
}

export async function addProducts(data) {
  let { products, calculatorId } = data;
  const savedPrds = await getCalcProducts(calculatorId);
  const savedPrdsHandles = savedPrds.products.map((el) => el.handle);
  const productsDataHandles = products.map((el) => el.handle);
  let addData = {
    calculatorId,
    products: products.filter(
      (prd) => savedPrdsHandles.indexOf(prd.handle) == -1
    ),
  };
  let deleteData = {
    calculatorId,
    products: savedPrds.products.filter(
      (el) => productsDataHandles.indexOf(el.handle) == -1
    ),
  };
  if (deleteData.products.length > 0) {
    const delData = await fetch("/calculators/delete-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteData),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
  if (addData.products.length > 0) {
    const data = await fetch("/calculators/add-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then((data) => data);
    return data;
  }
}

export async function deleteProduct(data) {
  const prdData = await fetch("/calculators/delete-products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);
  return prdData;
}

export async function getCalcProducts(calculator) {
  const data = await fetch(
    "/calculators/getCalc-products" + "?calculator=" + calculator
  )
    .then((res) => res.json())
    .then((data) => data);
  console.log(data);
  return data;
}
