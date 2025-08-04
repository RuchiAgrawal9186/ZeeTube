import React from "react";
import { IconMenu2, IconSearch, IconUserCircle } from "@tabler/icons-react";
import logo from "../assets/ZeeTube_Logo.png";
import {useDispatch} from "react-redux"
import { toggleMenu } from "../Utils/appSlice";

const Header = () => {
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-cols-12 items-center px-4 py-2 shadow-md bg-white gap-4 md:grid-cols-12 sm:grid-cols-6">
      {/* Left: Menu + Logo (col-span-3) */}
      <div className="col-span-3 flex items-center gap-3">
        <IconMenu2 stroke={2} className="w-6 h-6 cursor-pointer" onClick={handleToggleMenu} />
        <img src={logo} alt="ZeeTube" className="h-8 w-auto" />
      </div>

      {/* Center: Search Bar (col-span-6) */}
      <div className="col-span-6">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-1 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-gray-100 border border-gray-300 border-l-0 px-4 py-1 rounded-r-full hover:bg-gray-200">
            <IconSearch stroke={2} />
          </button>
        </div>
      </div>

      {/* Right: User Icon (col-span-3) */}
      <div className="col-span-3 flex justify-end">
        <IconUserCircle stroke={2} className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
