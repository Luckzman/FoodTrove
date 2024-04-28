import React, { useState } from "react";
import Logo from "../assets/foodtrove-logo.jpg";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
// import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b-[#F53E32] border-[1px] border-solid shadow-lg">
      <div className="container mx-auto">
        <div className="relative mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full">
            <a href="/#" className="block px-5 py-3">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="flex w-full items-center justify-end">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-8 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] border-solid border-gray-900 border-[1px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-gray-900"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-gray-900"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-gray-900"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-8 top-full w-full max-w-[180px] rounded-lg bg-white px-6 py-5 shadow-md dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/login">
                    <span className="flex items-center gap-2">
                      <BsPerson /> Account
                    </span>
                  </ListItem>
                  <ListItem NavLink="/#">
                    <span className="flex items-center gap-2">
                      <CiHeart /> Wishlist
                    </span>
                  </ListItem>
                  <ListItem NavLink="/cart">
                    <span className="flex items-center gap-2">
                      <CiShoppingCart /> Cart
                    </span>
                  </ListItem>
                  {/* <ListItem NavLink="/#">Blog</ListItem> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-red-600">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center  text-white py-2 px-5">
            <div>Login</div>
            <div>Home - login</div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;

type ListItem = {
  children: React.ReactNode;
  NavLink: string;
};

const ListItem = ({ children, NavLink }: ListItem) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};
