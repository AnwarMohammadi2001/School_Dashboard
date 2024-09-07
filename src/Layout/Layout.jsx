import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <div className="md:w-72 w-14 border-r-2">
        <SideBar />
      </div>
      <div className="w-full  bg-gray-100 px-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
