import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";

export default function AuthLayOut() {
  return (
    <div className="font-poppins bg-[#F3F3F3] min-h-screen">
      <div className="max-w-6xl mx-auto py-4 ">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
