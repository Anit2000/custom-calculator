import React, { useState } from "react";
import { Delete, ProductBox } from "../assets/Icons";
import { deleteProduct } from "../helpers/calculators";

const ProductTable = (props) => {
  async function updateData(el) {
    let data = {
      calculatorId: props.calculator._id,
      products: [el],
    };
    console.log(data);
    let prdData = await deleteProduct(data);
    props.setSelectedPrds(prdData.products);
  }
  if (props.products.length == 0) {
    return (
      <button
        className="min-w-[160px] border-[#afafaf] hover:border-[#929191] border-dashed border-2 rounded-lg p-4 min-h-[200px] flex flex-col justify-center items-center gap-4"
        onClick={() => {
          props.setPrdOverlayDisplay(true);
        }}
      >
        <span>
          <ProductBox class="w-10 h-10 text-[#929191]" />
        </span>
        <span className="text-[14px]">Add New Product</span>
      </button>
    );
  }
  return (
    <>
      <div className="border-[#e5e7eb] border-[1px] rounded-md pt-6 h-max">
        <div className="size-head grid grid-cols-2 px-4 pb-2 border-b-[#e5e7eb] border-b-[1px]">
          <div>
            <p className="font-medium text-[16px]">Products</p>
          </div>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {props.products.map((el, ind) => (
            <div
              key={el._id}
              className={`grid grid-cols-[auto_1fr] px-4 py-2 ${
                ind != props.products.length - 1
                  ? "border-b-[#e5e7eb] border-b-[1px]"
                  : ""
              }`}
            >
              <div>
                <p className="text-[14px]">{el.title}</p>
              </div>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => {
                    updateData(el);
                  }}
                >
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
