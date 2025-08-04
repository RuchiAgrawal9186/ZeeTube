import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex h-[calc(100vh-56px)] overflow-hidden">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
