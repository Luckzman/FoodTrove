import React from "react";
import Logo from "../assets/foodtrove-logo.jpg";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[50px]">
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
                <div className="mb-5">
                    <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    />
                </div>
                <div className="mb-5">
                    <Input
                    label="Password"
                    type="password"
                    className="mb-5"
                    name="password"
                    placeholder="Enter your password"
                    />
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-7">
                  <span className="leading-10">
                    <input
                      type="checkbox"
                      name=""
                      id="rememberMe"
                      className="mr-2"
                    />
                    <label htmlFor="rememberMe">Remember Me</label>
                  </span>
                  <a
                    href="/#"
                    className="inline-block text-base text-dark hover:text-primary leading-10 hover:underline "
                  >
                    Forget Password?
                  </a>
                </div>
                <div className="mb-10 flex flex-row justify-between items-center">
                  <input
                    type="submit"
                    value="Sign In"
                    className="cursor-pointer rounded-md border border-primary bg-red-600 text-white px-10 py-2 text-base font-medium transition hover:bg-opacity-90"
                  />
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign Up?
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

export default Login;
