import React from "react";
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import paypal from '../assets/paypal.png'
import visaElectron from '../assets/visa-electron.png'

const ATMPaymentCard = () => {
  return (
    <div className="p-[16px] rounded-md border-[1px] border-solid border-[#E9E9E9]">
      <h1 className="font-semibold text-[20px] leading-[24px] mb-[8spx]">
        More Payment Method
      </h1>
      <div className="flex gap-3 items-center mt-[15px]">
        <div className="flex justify-center items-center p-1 border border-light rounded">
            <img src={visa} alt="" className="w-10 h-5 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center border p-1 border-light rounded">
            <img src={mastercard} alt="" className="w-10 h-5 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center border border-light p-1 box-border rounded">
            <img src={paypal} alt="" className="w-10 h-5 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center border border-light p-1 box-border rounded">
            <img src={visaElectron} alt="" className="w-10 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
};

export default ATMPaymentCard;
