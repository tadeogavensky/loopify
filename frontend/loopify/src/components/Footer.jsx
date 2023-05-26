import { Link } from "react-router-dom";

import chatsvg from "../assets/images/icons/chat-svg.svg";
import callsvg from "../assets/images/icons/call-svg.svg";
import infocircle from "../assets/images/icons/info-circle.svg";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";

export const Footer = () => {
  const [showDropStore, setShowDropStore] = useState(false);
  const [showDropAbout, setShowDropAbout] = useState(false);
  const [showDropAssistance, setShowDropAssistance] = useState(false);
  const [showDropContact, setShowDropContact] = useState(false);

  return (
    <div className="my-8">
      <div className="block md:hidden">
        <footer>
          <ul>
            <li className="">
              <FooterButton
                name={"Store"}
                id={1}
                selectedState={setShowDropStore}
              />

              {!showDropStore ? null : <StoreLinks />}
            </li>
            <li className="">
              <FooterButton
                name={"About Loopify"}
                id={2}
                selectedState={setShowDropAbout}
              />
              {!showDropAbout ? null : <AboutLinks />}
            </li>
            <li className="">
              <FooterButton
                name={"Assistance"}
                id={3}
                selectedState={setShowDropAssistance}
              />
              {!showDropAssistance ? null : <AssistanceLinks />}
            </li>
            <li className="">
              <FooterButton
                name={"Contact Us"}
                id={4}
                selectedState={setShowDropContact}
              />
              {!showDropContact ? null : <ContactLinks />}
            </li>
          </ul>
        </footer>
      </div>
      <div className="hidden md:block">
        <footer className="flex justify-evenly items-baseline">
          <div className="space-y-4">
            <p className="uppercase">Store</p>
            <StoreLinks />
          </div>
          <div className="space-y-4">
            <p className="uppercase">About Loopify</p>
            <AboutLinks />
          </div>
          <div className="space-y-4">
            <p className="uppercase">Assistance</p>
            <AssistanceLinks />
          </div>
          <div className="space-y-4">
            <p className="uppercase">Contact us</p>
            <ContactLinks />
          </div>
        </footer>
      </div>
    </div>
  );
};

const FooterButton = ({ name, selectedState, id }) => {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
    selectedState(!selected);
    return id;
  };

  return (
    <button
      className="uppercase py-4 flex items-center justify-between w-full border-t-[1px] border-gray-300"
      onClick={toggle}
    >
      <span>{name}</span>
      {selected ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    </button>
  );
};

const StoreLinks = () => {
  return (
    <div className="flex flex-col gap-3 mb-2">
      <Link>Guitars</Link>
      <Link>Pedals</Link>
      <Link>Accessories</Link>
      <Link>Vynils</Link>
      <Link>Lessons</Link>
    </div>
  );
};

const AboutLinks = () => {
  return (
    <div className="flex flex-col gap-3 mb-2">
      <Link>Store locator</Link>
      <Link>Careers</Link>
      <Link>Professional</Link>
    </div>
  );
};

const AssistanceLinks = () => {
  return (
    <div className="flex flex-col gap-3 mb-2">
      <Link>FAQ</Link>
      <Link>Repairs</Link>
      <Link>Track your order</Link>
      <Link>Consumer defense</Link>
    </div>
  );
};

const ContactLinks = () => {
  return (
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
          <span className="text-gray-500 text-sm">Mon-Fri 08am - 09pm</span>
          <span className="text-gray-500 text-sm">Sat-Sun 09am - 09pm</span>
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
          <span className="text-gray-500 text-sm">Mon-Fri 08am - 09pm</span>
          <span className="text-gray-500 text-sm">Sat-Sun 09am - 09pm</span>
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
  );
};
