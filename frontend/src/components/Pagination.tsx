/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Pagination = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6 mt-[28px]">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        {/* <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div> */}
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span >Previous</span>
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-[#F53E32] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span>Next</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
