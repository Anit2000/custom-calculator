export async function getCalculators() {
  const data = await fetch("/calculators/list-calculator")
    .then((res) => res.json())
    .then((data) => data);
  return data;
}
export async function getCalculator(id) {
  const data = await fetch("/calculators/get-calculator" + "?id=" + id)
    .then((res) => res.json())
    .then((data) => data);
  console.log(data);
  return data;
}
export async function deleteCalculator(id) {
  const data = await fetch("/calculators/delete-calculator", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  }).then(res => res.json())
    .then(data => data);
  return data;
}

export async function addSizes(sizesData) {
  const data = await fetch("/calculators/add-sizes", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sizesData)
  }).then(res => res.json())
    .then(data => data);
  return data;
}

export async function editSize(sizeData) {
  const data = await fetch("/calculators/edit-size", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sizeData)
  }).then(res => res.json())
    .then(data => data);
  return data;
}

export async function deleteSize(sizeData) {
  console.log(sizeData);
  const data = await fetch("/calculators/delete-size", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sizeData)
  }).then(res => res.json())
    .then(data => data);
  return data;
}

export async function getSizes(id) {
  const data = await fetch("/calculators/sizes" + "?id=" + id).then(res => res.json()).then(data => data);
  return data;
}

export async function addProducts(productsData) {
  const data = await fetch("/calculators/add-sizes", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productsData)
  }).then(res => res.json())
    .then(data => data);
  return data;
}