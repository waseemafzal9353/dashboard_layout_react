import React, { useState } from "react";
import images from "../images";
import { Link } from "react-router-dom";
const Tabbar = () => {
  const [activeTab, setActiveTab] = useState("approvalList");
  return (
    <div
      className="bg-white h-20 
     outline-1 drop-shadow-md p-8 rounded-lg flex items-center justify-start gap-12 -z-50"
    >
      <div
        className={`cursor-pointer h-20 flex items-center justify-center ${
          activeTab === "approvalList" ? "border-b-2 border-green-500" : ""
        }`}
      >
        <h2 className={`${activeTab === 'approvalList' ? "text-green-500" : ""}`} 
        onClick={() => setActiveTab("approvalList")}>
          Journal Approval List
        </h2>
      </div>

      <div
        className={`cursor-pointer h-20 flex items-center justify-center ${
          activeTab === "journals" ? "border-b-2 border-green-500" : ""
        }`}
      >
        <h2 className={`${activeTab === 'journals' ? "text-green-500" : ""}`} onClick={() => setActiveTab("journals")}>
       <Link to={'journals'}>Journals</Link>
        </h2>
      </div>
    </div>
  );
};

export default Tabbar;
