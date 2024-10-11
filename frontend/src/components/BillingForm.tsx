import Input from "./Input";

const BillingForm = () => {
  return (
    <div>
      <div className="p-[16px] rounded-md border-[1px] border-solid border-[#E9E9E9]">
        <h2 className="font-semibold text-[20px] leading-[24px] mb-[18px]">
          Billing Details
        </h2>
        <p className="mb-[8px] text-[14px] text-[#7A7A7A]">Checkout Options</p>
        <div className="flex gap-10 mb-[8px]">
          <div className="flex gap-2">
            <input type="radio" name="billingOption" id="existingAddress" />
            <label
              htmlFor="existingAddress"
              className="text-[14px] text-[#7A7A7A] "
            >
              I want to use an existing address
            </label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="billingOption" id="newAddress" />
            <label htmlFor="newAddress" className="text-[14px] text-[#7A7A7A]">
              I want to use new address
            </label>
          </div>
        </div>
        <form>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <Input
              label="First Name"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-5">
            <Input
              label="Address"
              type="text"
              className="mb-5"
              name="address"
              placeholder="Address Line 1"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <Input label="City" type="text" name="city" placeholder="City" />
            <Input
              label="Post Code"
              type="text"
              name="postCode"
              placeholder="Post Code"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Country"
              type="text"
              name="country"
              placeholder="Country"
            />
            <Input
              label="Region State"
              type="text"
              name="region"
              placeholder="Region/State"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
