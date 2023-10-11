import { useState, useEffect } from "react";
import { Delete, Edit, Plus } from "../assets/Icons";
import CalculatorForm from "./CalculatorForm";
import AddCalculator from "./AddCalculator";
import { getCalculators } from "../helpers/calculators";

const CalculatorsWrapper = () => {
  const [addFormDisplay, setAddFormDisplay] = useState(false);
  const [calcList, setCalcList] = useState([]);
  const [selectedCalc,updateSelectedCalc] = useState(null);
  async function getData() {
    let calcList = await getCalculators();
    setCalcList(calcList);
  }
  useEffect(() => {
    getData();
  }, []);
  if(selectedCalc) return <CalculatorForm id={selectedCalc} updateSelectedCalc={updateSelectedCalc}/>
  return (
    <>
      {addFormDisplay && (
        <AddCalculator
          updateData={getData}
          updateDisplay={() => {
            setAddFormDisplay((prev) => !prev);
          }}
        />
      )}
      <div className="flex justify-between">
        <h3 className="font-bold uppercase">Calculators</h3>
        <button
          type="button"
          onClick={() => {
            setAddFormDisplay((prev) => !prev);
          }}
          class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
          <Plus />
        </button>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {calcList.map((calc) => (
          <li key={calc._id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 capitalize">
                  {calc.title}
                </p>
              </div>
            </div>
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {calc.products.length}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <div className="mt-1 flex items-center gap-x-3">
                <button onClick={()=>{updateSelectedCalc(calc._id)}}>
                  <Edit />
                </button>
                <button>
                  <Delete />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default CalculatorsWrapper;
