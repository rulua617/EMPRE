import React from "react";
import { MdSd } from "react-icons/md";
import { BiSolidHome, BiLogoWhatsapp } from "react-icons/bi";
import { PiMessengerLogoLight } from "react-icons/pi";

function Card(props) {
  return (
    <div className=" ">
      <div className="card card-compact w-62 bg-base-100 shadow-xl  ">
        <figure>
          <img src={props.image} />
        </figure>
        <div className="card-body "></div>
        <h2 className="card-title ml-2 mr-2"> {props.title}</h2>
        <p className="ml-2 mr-2"> {props.description}</p>

        <div className="card-actions justify-end">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 mr-6 mb-5 mt-4 btn-primary"
            >
              Comprar
            </div>

            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-30    first-letter: ">
              <li>
                <a className=" hover:bg-green-400 text-sm">
                  Whatsapp
                  <BiLogoWhatsapp className="text-2xl" />
                </a>
              </li>
              <li>
                <a className="hover:bg-purple-500 text-sm">
                  Messenger
                  <PiMessengerLogoLight className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* https://github.com/choidavid4/curso-react-yt/commit/51fa1e54359e213dbbf41f7a4975d132de5fc42f#diff-f40fa0cab9a9c5ec9b63c6dd4ea8139feab9675e8eceacaa2a0df377b083c267
 */
export default Card;
