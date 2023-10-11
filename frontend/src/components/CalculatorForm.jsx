import React, { useState } from "react";
import { Plus } from "../assets/Icons";
import ProductOverlay from "./ProductOverlay";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import SizeTable from "./SizeTable";
import SizeForm from "./SizeForm";
import { getCalculator } from "../helpers/calculators";
import { useEffect } from "react";

const CalculatorForm = (props) => {
  const [prdOverlayDisplay, setPrdOverlayDisplay] = useState(false);
  const [sizeFormDisplay, setSizeFormDisplay] = useState(false);
  const [calculator, setCalculator] = useState(null);
  console.log(props.id, "here");
  useEffect(() => {
    (async () => {
      let { calculator } = await getCalculator(props.id);
      setCalculator(calculator);
    })();
    getCalculator(props.id);
  }, []);

  return (
    <>
      {sizeFormDisplay && <SizeForm setSizeFormDisplay={setSizeFormDisplay} />}
      {prdOverlayDisplay && <ProductOverlay />}
      <div className="calculator-form-wrapper">
        <div class="flex w-full items-center gap-4">
          <button
            className="flex gap-2 items-center"
            onClick={() => props.updateSelectedCalc(null)}
          >
            <ChevronLeftIcon
              className="h-5 w-5 color-[#636363]"
              aria-hidden="true"
            />
            <span className="text-[#636363] text-[14px] leading-[14px]">
              Calculators
            </span>
          </button>
          <button
            className="flex ml-auto justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gap-2"
            onClick={() => {
              setPrdOverlayDisplay((prev) => !prev);
            }}
          >
            Add Product
            <Plus />
          </button>
          <button
            className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gap-2"
            onClick={() => {
              setSizeFormDisplay(true);
            }}
          >
            Add Size
            <Plus />
          </button>
        </div>
        <div className="my-6">
          <h2 className="font-bold capitalize text-[20px]">
            {calculator && calculator.title}
          </h2>
        </div>
        <div class="grid grid-cols-2 gap-4">
          {calculator && <SizeTable sizes={calculator.sizes} />}
        </div>
      </div>
    </>
  );
};

export default CalculatorForm;
