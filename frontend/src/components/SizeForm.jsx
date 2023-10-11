import React, { useState } from "react";
import { Close, Plus } from "../assets/Icons";

const SizeForm = (props) => {
  const [sizeBlocks, setSizeBlocks] = useState([1]);
  return (
    <>
      <form
        method="POST"
        className="absolute left-[50%] w-max min-h-[200px] translate-x-[-50%] top-[20%] z-[999] bg-white shadow-[0_0_10px_rgba(0,0,0,10%)] rounded-lg"
      >
        <div className="relative p-10">
          <span
            className="absolute right-0 top-0 translate-y-[-50%] translate-x-[50%] bg-white shadow-sm rounded-full aspect-square p-2 cursor-pointer"
            onClick={() => {
              props.setSizeFormDisplay(false);
            }}
          >
            <Close />
          </span>
          <div className="border-[#e5e7eb] border-[1px] rounded-md pt-6">
            <div className="size-head grid grid-cols-3 gap-2 px-4 pb-2 border-b-[#e5e7eb] border-b-[1px]">
              <div>
                <p className="font-medium text-[16px]">Height</p>
              </div>
              <div>
                <p className="font-medium text-[16px]">Width</p>
              </div>
              <div>
                <p className="font-medium text-[16px]">Price</p>
              </div>
            </div>
            <div className="max-h-[210px] overflow-y-auto">
              {sizeBlocks.map((el, ind) => (
                <div
                  key={`row-${ind}`}
                  className={`grid grid-cols-3 px-4 gap-2 py-2 ${
                    ind != sizeBlocks.length - 1
                      ? "border-b-[#e5e7eb] border-b-[1px]"
                      : ""
                  }`}
                >
                  <div>
                    <input
                      className="border-[#e5e7eb] border-[1px] max-w-[180px]"
                      type="number"
                    />
                  </div>
                  <div>
                    <input
                      className="border-[#e5e7eb]  border-[1px] max-w-[180px]"
                      type="number"
                    />
                  </div>
                  <div>
                    <input
                      className="border-[#e5e7eb]  border-[1px] max-w-[180px]"
                      type="number"
                    />
                  </div>
                </div>
              ))}
            </div>
            <span
              className="ml-auto flex bg-indigo-600 text-white p-[6px] mr-[10px] rounded-full mb-5 cursor-pointer w-max"
              onClick={() => {
                setSizeBlocks((prev) => [...prev, 1]);
              }}
            >
              <Plus />
            </span>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4 w-[130px] mx-auto"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
export default SizeForm;
