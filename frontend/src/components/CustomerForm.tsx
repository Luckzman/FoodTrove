import Input from "./Input";

const CustomerForm = () => {
  return (
    <div>
      <div className="p-[16px] rounded-md border-[1px] border-solid border-[#E9E9E9]">
        <h2 className="font-semibold text-[20px] leading-[24px] mb-[8px]">
          New
          <br />
          Customer
        </h2>
        <p className="mb-[8px]">Checkout Options</p>
        <div className="flex gap-10 mb-[8px]">
          <div className="flex gap-2">
            <input type="radio" name="checkoutOption" id="returningCustomer" />
            <label
              htmlFor="returningCustomer"
              className="text-[14px] text-[#7A7A7A] "
            >
              Returning Customer
            </label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="checkoutOption" id="registerAccount" />
            <label
              htmlFor="registerAccount"
              className="text-[14px] text-[#7A7A7A]"
            >
              Register Account
            </label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="checkoutOption" id="guestAccount" />
            <label
              htmlFor="guestAccount"
              className="text-[14px] text-[#7A7A7A]"
            >
              Guest Account
            </label>
          </div>
        </div>

        <h3 className="mt-[30px] mb-[8px]">Returning Customer</h3>
        <form>
          <div className="mb-5 w-1/2">
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-5 w-1/2">
            <Input
              label="Password"
              type="password"
              className="mb-5"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-[#F53E32] text-white px-5 py-2 rounded-md text-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
