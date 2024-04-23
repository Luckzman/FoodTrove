/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdGrid } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { CiFilter } from "react-icons/ci";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

type cardType = "landscape" | "portrait";

const Home = () => {
  const [cardType, setCardType] = useState<cardType>("portrait");
  return (
    <section>
      <div className="container mx-auto px-5">
        {/* Search Input */}
        <div className="my-10">
          <div className="flex items-center max-w-md mx-auto bg-white rounded-lg border-[1px] border-solid border-[#F53E32] rounded-r-lg">
            <div className="w-full ">
              <input
                type="search"
                className="w-full px-4 py-1 text-gray-800  rounded-full focus:outline-none"
                placeholder="search"
              />
            </div>
            <div className="w-12 h-12 bg-red-600 rounded-r-md overflow-hidden">
              <button
                type="submit"
                className="flex items-center bg-red-600 justify-center w-full h-full p-2 text-white  border-[1px] border-solid border-red-600 "
              >
                <FiSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="none lg:block">
            <ProductFilter />
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <div className="w-full bg-[#F7F7F8] flex flex-row justify-between items-center p-2 rounded border-[#E9E9E9] border-solid border-[1px]">
              <div className="flex items-center">
                <button className="mr-1 p-1 bg-white text-black rounded-[4px] border-[#E9E9E9] border-solid border-[1px]">
                  <CiFilter strokeWidth='1' />
                </button>
                <button
                  className={`${cardType === 'portrait' ? 'text-white bg-[#F53E32]' : 'bg-white text-black'} p-1 rounded-[4px] mr-1 border-[#E9E9E9] border-solid border-[1px]`}
                  onClick={() => setCardType("portrait")}
                >
                  <IoMdGrid />
                </button>
                <button
                  className={`${cardType === 'landscape' ? 'text-white bg-[#F53E32]' : 'bg-white text-black'} p-1 rounded-[4px] mr-1 border-[#E9E9E9] border-solid border-[1px]`}
                  onClick={() => setCardType("landscape")}
                >
                  <TbListDetails />
                </button>
                <span className="text-[#7A7A7A] text-[14px]">
                  We found 29 items for you!
                </span>
              </div>
              <div>
                <select
                  name="sort_product"
                  className="bg-[#F7F7F8] text-[#7A7A7A] text-[15px]"
                  id=""
                >
                  <option value="featured">Sort By: Featured</option>
                  <option value="featured">Sort By: price</option>
                  <option value="featured">Sort By: recent</option>
                </select>
              </div>
            </div>

            <div
              className={`grid ${cardType === "landscape" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}  mt-5 gap-10`}
            >
              <ProductCard cardType={cardType} id={1} />
              <ProductCard cardType={cardType} id={2} />
              <ProductCard cardType={cardType} id={3} />
            </div>
          </div>
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </section>
  );
};

export default Home;
