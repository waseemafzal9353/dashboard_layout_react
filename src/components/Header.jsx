import React, { useState } from "react";
import images from "../images";
import { FaBars } from "react-icons/fa6";
const Header = ({isClosed, toggleSidebar}) => {
  const [notification, setNotification] = useState(false)
  const [userDropDown, setDropDown] = useState(false);
  
  return (
    <div className="bg-white h-20 
     outline-1 drop-shadow-sm p-6 flex items-center justify-between -z-50">
      <div className="flex justify-center items-center gap-12">
        <div onClick={()=>toggleSidebar(!isClosed)} className={`bg-slate-900 w-10 h-10 
        cursor-pointer hover:bg-green-400 translate-all duration-300 flex items-center ${isClosed ? 'block' : 'hidden'} 
         justify-center rounded-full`}><FaBars className="text-white"/>
         </div>
        <h1 className="text-3xl font-semibold tracking-wide">RFPs</h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full h-12 w-12 overflow-hidden bg-gray-100
        items-center justify-center flex" onClick={() => setNotification(true)}>
          <img src={images.bell} className="w-[50%] h-[50%] object-cover" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="rounded-full overflow-hidden w-14 h-14 border-4 border-green-300">
            <img src={images.avatar} className="w-full h-full object-cover"/>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex flex-col">
              <h2 className="text-base font-normal">Volar Tech</h2>
              <p className="text-base text-gray-400">Corporate</p>
            </div>
            <div className="w-8 h-8 block">
              <img src={images.dropDown} className="text-black"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
