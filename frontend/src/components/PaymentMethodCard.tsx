const PaymentMethodCard = () => {
  return (
    <div className="p-[16px] rounded-md border-[1px] border-solid border-[#E9E9E9]">
      <h1 className="font-semibold text-[20px] leading-[24px] mb-[8px]">
        Payment Method
      </h1>
      <p className="text-[14px] text-[#7A7A7A] leading-[24px]">
        Please select the preferred payment method to use on this order.
      </p>

      <div className="flex flex-col gap-2 mt-[15px]">
        <div className="flex gap-1">
          <input type="radio" name="paymentMethod" id="cashOnDelivery" />
          <label
            htmlFor="cashOnDelivery"
            className="text-[14px] text-[#7A7A7A] ml-2"
          >
            Cash On Delivery
          </label>
        </div>
        <div className="flex gap-1">
          <input type="radio" name="paymentMethod" id="card" />
          <label htmlFor="card" className="text-[14px] text-[#7A7A7A] ml-2">
            ATM Card
          </label>
        </div>
        <div className="flex gap-1">
          <input type="radio" name="paymentMethod" id="bankTransfer" />
          <label
            htmlFor="bankTransfer"
            className="text-[14px] text-[#7A7A7A] ml-2"
          >
            Bank Transfer
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
