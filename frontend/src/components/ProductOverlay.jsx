import React, { useEffect } from "react";
import { Search, Check } from "../assets/Icons";
import Pagination from "./Pagination";
import {
  getShopifyProducts,
  searchShopifyProduct,
} from "../helpers/getProducts";
import { useState } from "react";

const ProductOverlay = (props) => {
  let [productData, setProductData] = useState([]);
  const [selectedPrd, setSelectedPrd] = useState(props.selectedPrd);
  let [searchQuery, setSearchQuery] = useState("");
  let [page, setPage] = useState(null);
  async function updateData(page_info) {
    let data = await getShopifyProducts(page_info);
    setProductData(data.products);
    setPage(data.page);
    return data.page;
  }
  async function searchProduct() {
    if (searchQuery.trim().length == 0) {
      updateData();
    } else {
      let data = await searchShopifyProduct(searchQuery);
      if (data.ok) {
        setProductData([data]);
      } else {
        setProductData([]);
      }
    }
  }
  function updateSelectedProduct(el) {
    let productData = {
      calculator: props.calc._id,
      title: el.title,
      handle: el.handle,
    };

    setSelectedPrd((prev) =>{
      let existing = prev.find(prd => prd.handle == el.handle);
      let arr = existing ? [...prev.slice(0,prev.indexOf(existing)),...prev.slice(prev.indexOf(existing)+1,prev.length)] : [el,...prev];
      return arr; 
    });
  }
  useEffect(() => {
    updateData();
  }, []);
  return (
    <div className="productOverlayWrapper absolute left-[50%] translate-x-[-50%] top-[20%] z-[1000] bg-white min-w-[600px] min-h-[400px] shadow-md rounded-md h-full">
      <div className="flex flex-col h-full">
        <form
          method="GET"
          className="flex w-full shadow-[0px_1px_1px_rgba(0,0,0,5%)] p-4 gap-2 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            searchProduct();
          }}
        >
          <Search class="stroke-[rgb(156_163_175)] cursor-pointer" />
          <input
            type="text"
            placeholder="Search Product"
            className="ring-0 w-full focus:ring-0 !outline-none"
            onInput={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="flex flex-col mt-4 gap-2 px-2 overflow-y-auto">
          {productData.map((el, ind) => {
            return (
              <div
                key={el.id}
                className="flex justify-start gap-3 p-2 cursor-pointer hover:bg-slate-100 rounded-md"
              >
                <div className="h-6 w-6 rounded-full bg-slate-500 overflow-hidden">
                  <img src={el.image?.src} />
                </div>
                <p className="text-[14px]">{el.title}</p>
                <button
                  className={
                    selectedPrd.find((prd) => prd.handle == el.handle)
                      ? "group-btn [&.selected]:text-indigo-800 ml-auto selected"
                      : "group-btn [&.selected]:text-indigo-800 ml-auto"
                  }
                  onClick={() => {
                    updateSelectedProduct(el);
                  }}
                >
                  <Check />
                </button>
              </div>
            );
          })}
        </div>
        {page && (
          <Pagination
            page={page}
            updateList={updateData}
            selectedPrd={selectedPrd}
          />
        )}
      </div>
    </div>
  );
};

export default ProductOverlay;
