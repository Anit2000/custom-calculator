import React from "react";
import { Delete, Edit, Scale } from "../assets/Icons";

const sizes = [
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
  {
    height: 10,
    width: 20,
    price: 20,
  },
];
const SizeTable = (props) => {
  if (props.sizes == 0) {
    return (
      <button className="min-w-[160px] border-[#afafaf] hover:border-[#929191] border-dashed border-2 rounded-lg p-4 min-h-[200px] flex flex-col justify-center items-center gap-4">
        <span>
          <Scale class="w-10 h-10 text-[#929191]" />
        </span>
        <span className="text-[14px]">Add New Size</span>
      </button>
    );
  }
  return (
    <div className="border-[#e5e7eb] border-[1px] rounded-md pt-6">
      <div className="size-head grid grid-cols-4 px-4 pb-2 border-b-[#e5e7eb] border-b-[1px]">
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
      <div className="max-h-[300px] overflow-y-auto">
        {sizes.map((el, ind) => (
          <div
            key={`row-${ind}`}
            className={`grid grid-cols-4 px-4 py-2 ${
              ind != sizes.length - 1 ? "border-b-[#e5e7eb] border-b-[1px]" : ""
            }`}
          >
            <div>
              <p className="text-[14px]">{el.height}</p>
            </div>
            <div>
              <p className="text-[14px]">{el.width}</p>
            </div>
            <div>
              <p className="text-[14px]">{el.price}</p>
            </div>
            <div className="flex gap-4 justify-end">
              <button>
                <Edit />
              </button>
              <button>
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeTable;
