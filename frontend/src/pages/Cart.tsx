import img2 from "../assets/img2.png";
import { RiDeleteBinLine } from "react-icons/ri";
import QuantityCounter from "../components/QuantityCounter";

const Cart = () => {
  return (
    <section>
      <table className="min-w-full border text-left text-sm font-light border-solid border-[#E9E9E9] rounded-md">
        <thead className="font-medium  text-[#444444] bg-[#E9E9E9]">
          <tr>
            <th scope="col" className="px-6 py-4">
              Product
            </th>
            <th scope="col" className="px-6 py-4">
              Price
            </th>
            <th scope="col" className="px-6 py-4">
              Quantity
            </th>
            <th scope="col" className="px-6 py-4">
              Total
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid round-md overflow-hidden">
          <tr className="">
            <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md ">
                <img className="h-full object-cover" src={img2} alt="" />
              </div>
              <p>Organic Lemon</p>
            </td>
            <td className="whitespace-nowrap px-6 py-4">$56.00</td>
            <td className="whitespace-nowrap px-6 py-4">
              <QuantityCounter />
            </td>
            <td className="whitespace-nowrap px-6 py-4">$56.00</td>
            <td className="whitespace-nowrap px-6 py-4">
              <RiDeleteBinLine />
            </td>
          </tr>
          <tr className="">
            <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md ">
                <img className="h-full object-cover" src={img2} alt="" />
              </div>
              <p>Organic Lemon</p>
            </td>
            <td className="whitespace-nowrap px-6 py-4">$56.00</td>
            <td className="whitespace-nowrap px-6 py-4">
              <QuantityCounter />
            </td>
            <td className="whitespace-nowrap px-6 py-4">$56.00</td>
            <td className="whitespace-nowrap px-6 py-4">
              <RiDeleteBinLine />
            </td>
          </tr>
          <tr className="round-md overflow-hidden">
            <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md ">
                <img className="h-full object-cover" src={img2} alt="" />
              </div>
              <p>Organic Lemon</p>
            </td>
            <td className="whitespace-nowrap px-6 py-4">$56.00</td>
            <td className="whitespace-nowrap px-6 py-4">
              <QuantityCounter />
            </td>
            <td className="whitespace-nowrap px-6 py-4">$56.00</td>
            <td className=" px-6 py-4 round-md overflow-hidden">
              <RiDeleteBinLine />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-5">
        <a href="/" className="underline text-sm">
          Continue Shopping
        </a>
        <a
          href="checkout"
          className="bg-[#F53E32] text-white px-5 py-2 rounded-md text-sm"
        >
          Checkout
        </a>
      </div>
    </section>
  );
};

export default Cart;
