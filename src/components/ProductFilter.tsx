import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tags from "./Tags";

const ProductFilter = () => {
  const [range, setRange] = useState<number[]>([0, 250]);

  return (
    <div className="bg-[#F7F7F8] p-[25px] rounded border-[#E9E9E9] border-solid border-[1px]">
      <div>
        <div className="border-b-solid border-b-[1px] border-b-gray-300">
          <h3 className="leading-10">Product Category</h3>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center py-3">
            <div>
              <input
                type="checkbox"
                name="productType"
                id="productType"
                className="mr-2"
              />
              <label htmlFor="productType" className=" text-[#7A7A7A] text-sm">
                Juice & Drinks
              </label>
            </div>
            <span className=" text-[#7A7A7A] text-sm">[20]</span>
          </div>
        </div>
      </div>

      <div>
        <div className="border-b-solid border-b-[1px] border-b-gray-300">
          <h3 className="leading-10">Filter By Price</h3>
        </div>
        <div className="py-5">
          <Slider
            range
            className="w-full mb-7"
            min={0}
            max={300}
            defaultValue={[range[0], range[1]]}
            allowCross={false}
            onChange={(value) => setRange(value as number[])}
            step={10}
            marks={{
              [range[0]]: `${range[0]}`,
              [range[1]]: `${range[1]}`,
            }}
          />
          <div>
            Price: <span>$20 - $250</span>
          </div>
          <div>
            <button className="width-full bg-red-600 text-white px-5 py-2 rounded mt-2 pointer">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="border-b-solid border-b-[1px] border-b-gray-300">
          <h3 className="leading-10">Product Category</h3>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center py-3">
            <div>
              <input
                type="checkbox"
                name="productType"
                id="productType"
                className="mr-2"
              />
              <label htmlFor="productType" className=" text-[#7A7A7A] text-sm">
                Hot
              </label>
            </div>
            <span className=" h-4 w-4 bg-red-600 rounded"></span>
          </div>
        </div>
      </div>

      <div>
        <div className="border-b-solid border-b-[1px] border-b-gray-300">
          <h3 className="leading-10">Weight</h3>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center py-3">
            <div>
              <input
                type="checkbox"
                name="productType"
                id="productType"
                className="mr-2"
              />
              <label htmlFor="productType" className=" text-[#7A7A7A] text-sm">
                2kg pack
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-b-solid border-b-[1px] border-b-gray-300">
          <h3 className="leading-10">Products Tags</h3>
        </div>
        <Tags />
      </div>
    </div>
  );
};

export default ProductFilter;
