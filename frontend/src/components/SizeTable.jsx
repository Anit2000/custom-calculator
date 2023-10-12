import React, { useState } from "react";
import { Delete, Edit, Scale } from "../assets/Icons";
import EditSizeForm from "./EditSizeForm";
import { editSize,deleteSize } from "../helpers/calculators";

const SizeTable = (props) => {
  const [editSizeFrom,setEditSizeForm] = useState(false);
  async function updateSize(data){
    try{
      let updatedSizes = await editSize(data);
      props.setSizes(updatedSizes.sizes);
      setEditSizeForm(false); 
    }catch(err){
      console.log(err);
    }
  }
  async function deleteSizeData(id){
    try{
      let deleteData = {
        id,
        calculator: props.calculator._id
      }
      let sizesData = await deleteSize(deleteData);
      props.setSizes(sizesData.sizes);
    }catch(err){
      console.log(err);
    }
  }
  if (props.sizes.length == 0) {
    return (
      <button className="min-w-[160px] border-[#afafaf] hover:border-[#929191] border-dashed border-2 rounded-lg p-4 min-h-[200px] flex flex-col justify-center items-center gap-4"
        onClick={()=>{props.setSizeFormDisplay(true)}}
      >
        <span>
          <Scale class="w-10 h-10 text-[#929191]" />
        </span>
        <span className="text-[14px]">Add New Size</span>
      </button>
    );
  }
  return (
    <>
    {editSizeFrom && <EditSizeForm setEditSizeForm={setEditSizeForm} calculator={props.calculator} size={editSizeFrom} updateSize={updateSize}/>}
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
        {props.sizes.map((el, ind) => (
          <div
            key={el._id}
            className={`grid grid-cols-4 px-4 py-2 ${
              ind != props.sizes.length - 1 ? "border-b-[#e5e7eb] border-b-[1px]" : ""
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
              <button onClick={()=>{setEditSizeForm(el)}}>
                <Edit />
              </button>
              <button onClick={()=>{deleteSizeData(el._id)}}>
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

export default SizeTable;
