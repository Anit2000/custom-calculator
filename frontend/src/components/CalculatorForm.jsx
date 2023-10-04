import React, { useState } from "react";
import { Plus } from "../assets/Icons";
import ProductOverlay from "./ProductOverlay";

const CalculatorForm = () => {
  const [prdOverlayDisplay, setPrdOverlayDisplay] = useState(false);
  return (
    <>
      {prdOverlayDisplay && <ProductOverlay />}
      <div className="calculator-form-wrapper">
        <div class="flex w-full justify-end gap-4">
          <button
            className="flex  justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gap-2"
            onClick={() => {
              setPrdOverlayDisplay((prev) => !prev);
            }}
          >
            Add Product
            <Plus />
          </button>
          <button className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gap-2">
            Add Size
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
};

export default CalculatorForm;
