import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
