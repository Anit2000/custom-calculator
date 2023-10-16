import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { addProducts } from "../helpers/calculators";
import { useState } from "react";

export default function Pagination(props) {
  let { page, updateList } = props;
  let [updatePage, setUpdatePage] = useState(page);
  async function updatePrdList(page_info) {
    let pageVal = await updateList(page_info);
    setUpdatePage(pageVal);
  }
  return (
    <div className="flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-auto">
      <button
        className="mr-auto flex justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gap-2"
        onClick={() => {
          console.log(props.selectedPrd);
          addProducts(props.selectedPrd);
        }}
      >
        Update
      </button>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              updatePrdList(updatePage.prev?.page_info);
            }}
            className={
              "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 [&.disabled]:cursor-not-allowed [&.disabled]:opacity-50" +
              `${!updatePage.prev ? " disabled" : ""}`
            }
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={() => {
              updatePrdList(updatePage.next?.page_info);
            }}
            className={
              "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 [&.disabled]:cursor-not-allowed [&.disabled]:opacity-50" +
              `${!updatePage.next ? " disabled" : ""}`
            }
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
}
