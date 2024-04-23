import React from "react";
import { TiStarOutline } from "react-icons/ti";

type StarRating = {
  review: string;
}
const StarRating = ({ review }: StarRating) => {
  return (
    <div className=" mt-[10px] flex items-center">
      <div className="flex mr-5">
        <TiStarOutline />
        <TiStarOutline />
        <TiStarOutline />
        <TiStarOutline />
      </div>
      <p className="text-[#B6B6B6] text-[14px]">({review})</p>
    </div>
  );
};

export default StarRating;
