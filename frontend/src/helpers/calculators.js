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
