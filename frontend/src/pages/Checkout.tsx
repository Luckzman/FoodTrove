import React from "react";
import SummaryCard from "../components/SummaryCard";
import DeliveryMethodCard from "../components/DeliveryMethodCard";
import PaymentMethodCard from "../components/PaymentMethodCard";
import ATMPaymentCard from "../components/ATMPaymentCard";

const Checkout = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-10">
          <SummaryCard />
          <DeliveryMethodCard />
          <PaymentMethodCard />
          <ATMPaymentCard />
        </div>

        <div className="col-span-2"></div>
      </div>
    </section>
  );
};

export default Checkout;
