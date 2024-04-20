import React from "react";
import Logo from "../assets/foodtrove-logo.jpg";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="px-5 flex flex-wrap">
          <div className="w-full">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-10 text-left dark:bg-dark-2 sm:px-12 md:px-[60px] border-solid border-[1px] border-slate-300">
              <div className="mb-10 text-center md:mb-16">
                <a href="/#" className="mx-auto inline-block max-w-[160px]">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <form>
                <div className="grid lg:grid-cols-2 mb-5 gap-5">
                  <Input
                    label="First Name"
                    name="firstName"
                    placeholder="Enter your first name"
                  />
                  <Input
                    label="Last Name"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="grid lg:grid-cols-2 mb-5 gap-5">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <Input
                    label="Phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="grid lg:grid-cols-2 mb-5 gap-5">
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <Input
                    label="Repeat Password"
                    type="password"
                    name="repeatPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-10 grid lg:grid-cols-2 items-center gap-5">
                  <button
                    type="submit"
                    value="Sign Up"
                    className="w-[120px] cursor-pointer rounded-md border border-primary bg-red-600 text-white px-2 py-2 text-base font-medium transition hover:bg-opacity-90"
                  >Sign Up</button>
                  <Link
                    to="/login"
                    className="text-primary hover:underline justify-self-start lg:justify-self-end"
                  >
                    Have an Account?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
