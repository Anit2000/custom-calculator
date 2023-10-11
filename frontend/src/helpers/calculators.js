export async function getCalculators() {
  const data = await fetch("/calculators/list-calculator")
    .then((res) => res.json())
    .then((data) => data);
  return data;
}
