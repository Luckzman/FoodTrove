import img2 from "../assets/img2.png";
import StarRating from "./StarRating";

const SummaryCard = () => {
  return (
    <div className="p-[16px] rounded-md border-[1px] border-solid border-[#E9E9E9]">
      <h1 className="font-semibold text-[20px] leading-[24px]">Summary</h1>
      <div className="flex justify-between items-center mt-[15px]">
        <p className="text-[14px] text-[#7A7A7A]">Sub-Total</p>
        <span className="text-[15px] text-black">$80.00</span>
      </div>
      <div className="flex justify-between items-center mt-[15px]">
        <p className="text-[14px] text-[#7A7A7A]">Delivery Charges</p>
        <span className="text-[15px] text-black">$80.00</span>
      </div>
      <hr className="my-5 h-0.5 border-t-0 bg-[#E9E9E9] opacity-100 dark:opacity-50" />
      <div className="flex justify-between items-center mt-[10px]">
        <p className="text-[16px] text-black">Total Amount</p>
        <span className="text-[16px] text-black">$80.00</span>
      </div>
      <div className="max-h-[180px] flex flex-col gap-5 mt-[20px] overflow-y-scroll">
        <div className="flex gap-5">
          <div className="w-[65px] h-[65px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md ">
            <img className="h-full object-cover" src={img2} alt="" />
          </div>
          <div>
            <p className="text-[15px]">Organic Lemon</p>
            <StarRating review="4.5" />
            <p className="text-[#3BB77E] text-[16px]">$28.85</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[65px] h-[65px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md ">
            <img className="h-full object-cover" src={img2} alt="" />
          </div>
          <div>
            <p className="text-[15px]">Smoked Honey Spiced Nuts</p>
            <StarRating review="4.5" />
            <p className="text-[#3BB77E] text-[16px]">$28.85</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
