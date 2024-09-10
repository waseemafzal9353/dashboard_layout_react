import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import images from "../images";
const Sidebar = ({isClosed, toggleSidebar}) => {

  return (
    <div
      className={`bg-slate-900 h-full fixed ${
        isClosed ? "w-20" : "w-64"
      } flex flex-col items-start justify-between`}
    >
      <div>
        <div className="relative gap-3">
          <img src={images.logo} className={`w-full p-8`}/>
          <div
            className="absolute bg-white p-2 top-10 -right-4
        rounded-md shadow-xl cursor-pointer transition-all z-50 duration-300"
          >
            <IoIosArrowBack
              className="w-full"
              onClick={() => toggleSidebar(!isClosed)}
            />
          </div>
        </div>
        <ul className={`w-full pl-5 pr-2 ${isClosed ? "mt-6" : "mt-2"}`}>
          <li
            className="flex gap-3 items-center justify-start p-3 transition-all cursor-pointer
         hover:bg-green-500 w-full hover:rounded-lg"
          >
            <img src={images.home} className="text-white w-6" />
            <Link className={`text-white text-lg ${isClosed ? "hidden" : "block"}`}>Dashboard</Link>
          </li>
          <li
            className="flex gap-3 items-center justify-start p-3 transition-all cursor-pointer
         hover:bg-green-500 w-full hover:rounded-lg"
          >
            <img src={images.rfp} className="text-white w-6" />
            <Link className={`text-white text-lg ${isClosed ? "hidden" : "block"}`}>RFPs</Link>
          </li>{" "}
          <li
            className="flex gap-3 items-center justify-start p-3 transition-all cursor-pointer
         hover:bg-green-500 w-full hover:rounded-lg"
          >
            <img src={images.coins_hand} className="text-white w-6" />
            <Link className={`text-white text-lg ${isClosed ? "hidden" : "block"}`}>Purchase Orders</Link>
          </li>{" "}
          <li
            className="flex gap-3 items-center justify-start p-3 transition-all cursor-pointer
         hover:bg-green-500 w-full hover:rounded-lg"
          >
            <img src={images.invoice} className="text-white w-6" />
            <Link className={`text-white text-lg ${isClosed ? "hidden" : "block"}`}>Invoice</Link>
          </li>
        </ul>
      </div>
      <div className="mb-2 w-full pl-5 pr-2"
      >
           <li
            className="flex gap-3 items-center justify-start p-3 transition-all cursor-pointer
         hover:bg-green-500 w-full hover:rounded-lg"
          >
            <img src={images.logout} className="text-white w-6" />
            <Link className={`text-white text-lg ${isClosed ? "hidden" : "block"}`}>Logout</Link>
          </li>
      </div>
    </div>
  );
};

export default Sidebar;
