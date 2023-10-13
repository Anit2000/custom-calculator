import React, { useState } from "react";
import { Delete, Edit, Scale } from "../assets/Icons";
import EditSizeForm from "./EditSizeForm";
import { editSize, deleteSize } from "../helpers/calculators";

const products = [
  {
    _id: "1",
    title: "product 1",
  },
  {
    _id: "2",
    title: "product 2",
  },
  {
    _id: "3",
    title: "product 3",
  },
];
const ProductTable = (props) => {
  if (products.length == 3) {
    return (
      <button className="min-w-[160px] border-[#afafaf] hover:border-[#929191] border-dashed border-2 rounded-lg p-4 min-h-[200px] flex flex-col justify-center items-center gap-4">
        <span>
          <Scale class="w-10 h-10 text-[#929191]" />
        </span>
        <span className="text-[14px]">Add New Product</span>
      </button>
    );
  }
  return (
    <>
      <div className="border-[#e5e7eb] border-[1px] rounded-md pt-6">
        <div className="size-head grid grid-cols-2 px-4 pb-2 border-b-[#e5e7eb] border-b-[1px]">
          <div>
            <p className="font-medium text-[16px]">Products</p>
          </div>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {products.map((el, ind) => (
            <div
              key={el._id}
              className={`grid grid-cols-2 px-4 py-2 ${
                ind != products.length - 1
                  ? "border-b-[#e5e7eb] border-b-[1px]"
                  : ""
              }`}
            >
              <div>
                <p className="text-[14px]">{el.title}</p>
              </div>
              <div>
                <p className="text-[14px]">{el.width}</p>
              </div>
              <div className="flex gap-4 justify-end">
                <button>
                  <Delete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductTable;
