import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-[calc(100vh-56px)] overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
