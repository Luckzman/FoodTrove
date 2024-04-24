import React from "react";

const DeliveryMethodCard = () => {
  return (
    <div className="p-[16px] rounded-md border-[1px] border-solid border-[#E9E9E9]">
      <h1 className="font-semibold text-[20px] leading-[24px]">
        Delivery Method
      </h1>
      <p className="text-[14px] text-[#7A7A7A] leading-[24px]">
        Please select the preferred shipping method to use on this order.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-[15px] mb-[25px]">
        <div>
          <p className="text-[15px] text-[#2B2B2D]">Free Shipping</p>
          <div>
            <input type="radio" name="deliveryMethod" id="freeShipping" />
            <label
              htmlFor="freeShipping"
              className="text-[14px] text-[#7A7A7A] ml-2"
            >
              Rate - $0.00
            </label>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-[#2B2B2D]">Flat Rate</p>
          <div>
            <input type="radio" name="deliveryMethod" id="flatRate" />
            <label
              htmlFor="flatRate"
              className="text-[14px] text-[#7A7A7A] ml-2"
            >
              Rate - $5.00
            </label>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[15px] text-[#2B2B2D] mb-[8px]">
          Add Comments About Your Order
        </p>
        <textarea
          rows={5}
          className="w-full border-[1px] border-solid border-[#E9E9E9] rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

export default DeliveryMethodCard;
