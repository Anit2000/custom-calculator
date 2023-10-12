import React, { useState } from "react";
import { Close } from "../assets/Icons";
import { editSize } from "../helpers/calculators";

const EditSizeForm = (props) => {
    function submissionHandler(e){
        e.preventDefault();
        let data = 
            {
                id: props.size._id,
                calculator:props.calculator._id,
                height : e.target.querySelector('[name="height"]').value,
                width : e.target.querySelector('[name="width"]').value,
                price : e.target.querySelector('[name="price"]').value,
            }
        props.updateSize(data);
    }
  return (
    <>
      <form
        method="POST"
        className="absolute left-[50%] w-max min-h-[200px] translate-x-[-50%] top-[20%] z-[999] bg-white shadow-[0_0_10px_rgba(0,0,0,10%)] rounded-lg"
        onSubmit={submissionHandler}
      >
        <div className="relative p-10">
          <span
            className="absolute right-0 top-0 translate-y-[-50%] translate-x-[50%] bg-white shadow-sm rounded-full aspect-square p-2 cursor-pointer"
            onClick={()=>{props.setEditSizeForm(null)}}
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
                <div
                  className={`grid grid-cols-3 px-4 gap-2 py-2 `}
                  data-role="size"
                >
                  <div>
                    <input
                      className="border-[#e5e7eb] border-[1px] max-w-[180px]"
                      type="number"
                      defaultValue={props.size ? props.size.height : 0 }
                      name="height"
                    />
                  </div>
                  <div>
                    <input
                      className="border-[#e5e7eb]  border-[1px] max-w-[180px]"
                      type="number"
                      name="width"
                      defaultValue={props.size ? props.size.width : 0}
                    />
                  </div>
                  <div>
                    <input
                      className="border-[#e5e7eb]  border-[1px] max-w-[180px]"
                      type="number"
                      name="price"
                      defaultValue={props.size ? props.size.price : 0 }
                    />
                  </div>
                </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4 w-[130px] mx-auto"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};
export default EditSizeForm;
