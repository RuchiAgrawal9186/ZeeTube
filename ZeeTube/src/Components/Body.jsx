import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const handleCloseMenu = () => {
    dispatch(toggleMenu()); // close menu on overlay or icon click
  };
  return (
    <div className="flex h-full w-full">
      {/* Sidebar for desktop */}
      <div
        className={`hidden md:block transition-all duration-300 
        ${isMenuOpen ? "w-60" : "w-30"}`}
      >
        <Sidebar />
      </div>

      {/* Sidebar for mobile (left drawer) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex left-0 md:hidden lg:hidden">
          {/* Dark overlay → close on click */}
          <div className="bg-black/50 w-full" onClick={handleCloseMenu} />

          {/* Drawer (slide from left) */}
          <div className="w-60 bg-white h-full shadow-xl animate-slide-in-left">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 md:w-[84%] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
