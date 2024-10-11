import SummaryCard from "../components/SummaryCard";
import DeliveryMethodCard from "../components/DeliveryMethodCard";
import PaymentMethodCard from "../components/PaymentMethodCard";
import CustomerForm from "../components/CustomerForm";
import BillingForm from "../components/BillingForm";

const Checkout = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-10">
          <SummaryCard />
          <DeliveryMethodCard />
          <PaymentMethodCard />
        </div>
        <div className="col-span-2 flex flex-col gap-10">
          <CustomerForm />
          <BillingForm />
          <div className="flex justify-end">
            <button className="bg-[#F53E32] text-white px-5 py-2 rounded-md text-sm">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
