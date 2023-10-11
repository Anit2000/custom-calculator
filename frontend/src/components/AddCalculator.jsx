import React from "react";
import Input from "./Input";
import { Close } from "../assets/Icons";

const AddCalculator = (props) => {
  async function addCalc(title) {
    fetch("/calculators/add-calculator", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  async function handleSubmission(e) {
    e.preventDefault();
    let title = e.target.querySelector("input").value;
    let res = await addCalc(title);
    props.updateData();
    props.updateDisplay();
  }
  return (
    <>
      <form
        method="POST"
        className="absolute left-[50%] translate-x-[-50%] top-[50%] z-[999] bg-white shadow-[0_0_10px_rgba(0,0,0,10%)] rounded-lg"
        onSubmit={(e) => {
          handleSubmission(e);
        }}
      >
        <div className="relative p-10">
          <button
            className="absolute right-0 top-0 translate-y-[-50%] translate-x-[50%] bg-white shadow-sm rounded-full aspect-square p-2"
            onClick={props.updateDisplay}
          >
            <Close />
          </button>
          <Input label="Calculator Title" placeholder="Enter calculaor title" />
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

export default AddCalculator;
