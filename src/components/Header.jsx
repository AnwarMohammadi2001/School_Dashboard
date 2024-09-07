import React from "react";
import { BiUserCircle } from "react-icons/bi";

import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <div className="">
      <div className="flex py-2 justify-between">
        <div>
          <h1 className="text-sm font-bold  text-gray-500">Welcome Back !</h1>
        </div>
        <div className="flex items-center space-x-7">
          <div>
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-2 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-1 flex items-center pr-3 pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="relative inline-block">
            <FaBell className="text-2xl text-gray-600" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
              5
            </span>
          </div>
          <div>
            <button className="rounded-full ">
              <BiUserCircle size={36} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
