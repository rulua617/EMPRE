import React from "react";

import { HiMenu } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { PiMessengerLogoLight } from "react-icons/pi";

function Header() {
  return (
    <div className="navbar bg-base-300 rounded-b-2xl  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <div className="  ">
              <a className="btn btn-ghost text-xl  hover:bg-blue-500 ">
                <p className="hidden md:block"> Categorias</p> <BiCategoryAlt />
              </a>
            </div>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>inicio</a>
            </li>
            <li>
              <a>Herraminetas</a>
            </li>
            <li>
              <a>Tecgnologia</a>
            </li>
            <li>
              <a>Belleza</a>
            </li>
            <li>
              <a>Otras</a>
            </li>
          </ul>
        </div>
      </div>

      {/* 
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Buscar"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Header;
