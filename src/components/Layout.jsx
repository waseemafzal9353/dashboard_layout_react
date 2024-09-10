import React, { useState } from "react";

import { Outlet } from "react-router-dom"; // Used to render child routes
import Sidebar from "./Sidebar";
import Header from "./Header";
import Tabbar from "./Tabbar";

const Layout = () => {
  const [sideBarClosed, setIsSideBarClosed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Sidebar isClosed={sideBarClosed} toggleSidebar={setIsSideBarClosed} />
      <div
        className={`flex-1 transition-all duration-300 ${
          sideBarClosed ? "ml-0" : "ml-64"
        }`}
      >
        <Header isClosed={sideBarClosed} toggleSidebar={setIsSideBarClosed} />
        <div
        className={`flex-1 p-4 transition-all duration-300 ${
          sideBarClosed ? "ml-20" : ""
        }`}
      >
          <Tabbar/>
        </div>
        <div
          className={`flex-1 p-4 transition-all duration-300 ${
            sideBarClosed ? "ml-20" : ""
          }`}
        >
          <Outlet /> {/* This is where your page components will render */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
