


import React from "react";

import {
   BiSolidHome,
   BiLogoWhatsapp,

} from "react-icons/bi";
import { MdOutlineLocalOffer,
  MdOutlineShoppingBag, } from "react-icons/md";


const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-32 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-3xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#6a77ec] p-4 flex justify-center rounded-xl text-white"
            >
              <BiSolidHome  className="text-3xl" />
            
            </a>
            <span className="text-center text-white ml-4 mt-1  font-bold">Inicio</span>
          </li>

        
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#6a77ec] p-4 flex justify-center rounded-xl text-[#434eee] group-hover:text-white transition-colors"
            >
              <MdOutlineLocalOffer className="text-3xl" />
            </a>
            <span className="text-center text-gray-400 ml-4 mt-1  font-bold  group-hover:text-white transition-colors">Ofertas</span>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#6a77ec] p-4 flex justify-center rounded-xl text-[#434eee] group-hover:text-white transition-colors"
            >
              <MdOutlineShoppingBag className="text-3xl" />
            </a>
            <span className="text-center text-gray-400 ml-3 mt-1  font-bold  group-hover:text-white transition-colors">Prductos</span>
          </li>
       
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#6a77ec] p-4 flex justify-center rounded-xl text-[#434eee] group-hover:text-white transition-colors"
            >
              < BiLogoWhatsapp className="text-3xl" />

            </a>
            <span className="text-center text-gray-400 ml-0 mt-1  font-bold  group-hover:text-white transition-colors">
              Whatsapp
              </span>
          </li>
          
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#6a77ec] p-4 flex justify-center rounded-xl text-[#434eee] group-hover:text-white transition-colors"
            >
           
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
