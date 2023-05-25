import { Link } from "react-router-dom";

import chatsvg from "../assets/images/icons/chat-svg.svg";
import callsvg from "../assets/images/icons/call-svg.svg";
import infocircle from "../assets/images/icons/info-circle.svg";

export const Footer = () => {
  return (
    <div>
      /*MOBILE FOOTER*/
      <div>
        <ul>
          <li>
            <button className="uppercase mb-4">Store</button>
            <div>
              <Link>Guitars</Link>
              <Link>Pedals</Link>
              <Link>Accessories</Link>
              <Link>Vynils</Link>
              <Link>Lessons</Link>
            </div>
          </li>
          <li>
            <button className="uppercase mb-4">About Loopify</button>
            <div>
              <Link>Store locator</Link>
              <Link>Careers</Link>
              <Link>Professional</Link>
            </div>
          </li>
          <li>
            <button className="uppercase mb-4">Assistance</button>
            <div>
              <Link>FAQ</Link>
              <Link>Repairs</Link>
              <Link>Track your order</Link>
              <Link>Consumer defense</Link>
            </div>
          </li>
          <li>
            <button className="uppercase mb-4">Contact Us</button>
            <div className="mt-4 flex flex-col items-start gap-6">
              <Link className="flex items-center gap-3">
                <div className="w-8">
                  <img src={chatsvg} alt="" className="w-full object-cover" />
                </div>
                <p>Chat with us</p>
              </Link>
              <Link className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-8">
                    <img src={callsvg} alt="" className="w-full object-cover" />
                  </div>
                  <p>Loopify Club</p>
                </div>

                <div className="flex flex-col ml-10 mt-4">
                  <span className="text-gray-500 text-sm">
                    Mon-Fri 08am - 09pm
                  </span>
                  <span className="text-gray-500 text-sm">
                    Sat-Sun 09am - 09pm
                  </span>
                </div>
              </Link>

              <Link className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-8">
                    <img src={chatsvg} alt="" className="w-full object-cover" />
                  </div>

                  <div className="flex flex-col">
                    <p>Whatsapp</p>
                    <p>Chat with us</p>
                  </div>
                </div>

                <div className="flex flex-col ml-10 mt-4">
                  <span className="text-gray-500 text-sm">
                    Mon-Fri 08am - 09pm
                  </span>
                  <span className="text-gray-500 text-sm">
                    Sat-Sun 09am - 09pm
                  </span>
                </div>
              </Link>

              <Link className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-8">
                    <img src={callsvg} alt="" className="w-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <p>From abroad</p>
                    <p>727-797-2133</p>
                  </div>
                </div>
              </Link>

              <Link className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-8">
                    <img src={infocircle} alt="" className="w-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <p>725 NE 166th St</p>
                    <p>Miami, Florida(FL), 33162</p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
