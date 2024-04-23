/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { GoHeart } from "react-icons/go";
import orangeUrl from "../assets/orange.png";
// import { TiStarOutline } from "react-icons/ti";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

export type TProductCard = {
  cardType: "landscape" | "portrait";
  id: number;
};
const ProductCard = ({ cardType, id }: TProductCard) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`${id}`);
      }}
      className={`grid ${cardType === "portrait" ? "grid-row-2" : "lg:grid-cols-4"} gap-10 p-[13px] border-solid border-[1px] border-[#E9E9E9] rounded-lg cursor-pointer`}
    >
      <div className="col-span-1 flex  justify-center items-center box-border bg-[#F7F7F8] relative rounded-lg border-solid border-[1px] border-[#E9E9E9]">
        <div className="w-full flex  items-center justify-center overflow-hidden relative rounded-lg">
          <img className="" src={orangeUrl} alt="" />
          <div className="absolute top-0 left-0 px-5 py-1 bg-[#F74B81] border-solid border-[1px] border-[#F74B81] text-white rounded-br-lg text-[12px] z-10">
            Hot
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            alert("wishlist clicked");
          }}
          className={`absolute ${cardType === "portrait" ? "bottom-0 mb-[-20px]" : "right-0 mr-[-20px]"}  w-10 h-10 flex items-center bg-[#F7F7F8] justify-center z-10 rounded-full p-[1px] border-[#E9E9E9] border-solid border-[1px]`}
        >
          <GoHeart color="#3BB77E" strokeWidth={1} />
        </div>
      </div>
      <div
        className={`${cardType === "portrait" ? "col-span-1" : "col-span-3"} flex flex-col justify-between`}
      >
        <p className="text-[#ADADAD] text-[12px]">Snack</p>
        <p className="text-[#2B2B2D] text-[15px] mt-[10px]">
          Fresh organic villa farm lemon 500gm pack
        </p>
        <StarRating review="4.5" />
        <p className="text-[#B6B6B6] text-[14px] mt-[10px]">
          By <span className="text-[#F53E32]">NestFood</span>
        </p>
        <div className="flex items-center justify-between mt-[18px]">
          <p className="text-[#3BB77E] text-[18px]">$28.85</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("add to cart clicked");
            }}
            className="flex items-center justify-around bg-[#F53E32] text-white text-[14px] px-5 py-2 rounded-md"
          >
            <CiShoppingCart strokeWidth={1} className="mr-1" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
