import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faBars,
  faBagShopping,
  faXmark,
  faGuitar,
  faHeadphonesSimple,
  faCompactDisc,
  faGraduationCap,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SubHeader } from "./SubHeader";

import logo from "../assets/images/logo.png";

export const Navbar = () => {
  const [userLogged, setUserLogged] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);

  const toggle = () => {
    setShowSidebar(!showSidebar);
    console.log("showSidebar :>> ", showSidebar);
  };

  return (
    <div className="flex flex-col  bg-[#252525] py-6 space-y-6 ">
      <nav className="flex flex-row sm:justify-around justify-between items-center flex-wrap">
        <button className="text-white md:hidden ml-8" onClick={toggle}>
          {!showSidebar ? (
            <FontAwesomeIcon icon={faBars} className="text-[40px]" />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="text-[40px]" />
          )}
        </button>

        <Link to={"/"} className="flex items-center md:gap-3">
          <h1 className="text-[#F4F0EC] text-[30px] uppercase mr-2 sm:mr-0 worksans-bold">
            Loopi
            <span className="text-[#FF753A]">fy</span>
          </h1>
          <div className="sm:w-14 w-12 pr-4">
            <img src={logo} alt="" className="w-full object-cover" />
          </div>
        </Link>

        <form
          action=""
          className=" items-center w-1/2 md:w-1/3 relative hidden sm:flex"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none px-4 py-3 rounded-md  "
          />
          <button
            type="submit"
            className="text-white bg-[#FF753A] outline-none absolute right-0  px-12 py-[9.5px] rounded-r-md"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[26px]" />
          </button>
        </form>

        {userLogged ? (
          <div className="md:flex hidden items-center space-x-12 text-white font-2xl">
            <Link to={"/account"}>
              <button className="flex flex-row items-center space-x-3 group ">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-[16px] group-hover:text-[#FF753A] transition-all duration-200 ease-in-out"
                />
                <h1 className="group-hover:text-[#FF753A] transition-all duration-200 ease-in-out">
                  Account
                </h1>
              </button>
            </Link>

            <Link to={"/basket"}>
              <button className="flex items-center space-x-3 group">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="text-[16px] group-hover:text-[#FF753A] transition-all duration-200 ease-in-out"
                />
                <h1 className="group-hover:text-[#FF753A] transition-all duration-200 ease-in-out">
                  Basket
                </h1>
              </button>
            </Link>
          </div>
        ) : (
          <div className="md:flex hidden  items-center space-x-8">
            <Link
              to={"/login"}
              className="hover:text-[#FF753A] text-lg md:ml-3 text-white transition-all duration-200 ease-in-out"
            >
              Sign in
            </Link>

            <button className="group flex flex-row items-center bg-white p-3 text-black hover:text-white hover:bg-[#FF753A] rounded-md transition-all duration-500 ease-in-out ">
              <h1 className=" ">Get all-access</h1>
            </button>
          </div>
        )}
        <form
          action=""
          className="flex items-center w-full relative sm:hidden mt-6 mx-6"
        >
          <input
            type="text"
            placeholder="Search for a product..."
            className="w-full outline-none px-4 py-3 rounded-md "
          />
          <button
            type="submit"
            className="text-white bg-[#FF753A] outline-none absolute right-0  px-6 py-[9.5px] rounded-r-md"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[26px]" />
          </button>
        </form>

        {showSidebar && <BurgerMenu userLogged={userLogged}/>}
      </nav>
      <SubHeader />
    </div>
  );
};

const BurgerMenu = ({userLogged}) => {
  return (
    <div className="relative z-40 w-full h-full flex md:hidden">
      <nav className="ml-4 flex flex-col items-center gap-8 justify-evenly text-white text-lg w-full py-12">
        <div className="">
          {userLogged ? (
            <div className="flex items-center space-x-12 text-white font-2xl">
              <Link to={"/account"}>
                <button className="flex flex-row items-center space-x-3 bg-white text-black rounded-md px-4 py-2 ">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[16px] "
                  />
                  <h1 className="">
                    Account
                  </h1>
                </button>
              </Link>

              <Link to={"/basket"}>
              <button className="flex flex-row items-center space-x-3 bg-white text-black rounded-md px-4 py-2 ">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="text-[16px]"
                  />
                  <h1 className="">
                    Basket
                  </h1>
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              <Link
                to={"/login"}
                className="flex flex-row items-center bg-[#FF753A] px-4 py-2 text-white rounded-md"
              >
                Sign in
              </Link>

              <button className="group flex flex-row items-center bg-white px-4 py-2 text-black rounded-md ">
                <h1 className=" ">Get all-access</h1>
              </button>
            </div>
          )}
        </div>

        <Link to={``} className="flex items-center justify-between w-full pr-4">
          <p>Guitars</p>
          <FontAwesomeIcon icon={faGuitar} />
        </Link>
        <Link to={``} className="flex items-center justify-between w-full pr-4">
          <p>Pedals</p>
          <div className="w-4">
            <img src={logo} alt="" className="w-full object-contain" />
          </div>
        </Link>
        <Link to={``} className="flex items-center justify-between w-full pr-4">
          <p>Accessories</p>
          <FontAwesomeIcon icon={faHeadphonesSimple} />
        </Link>
        <Link to={``} className="flex items-center justify-between w-full pr-4">
          <p>Vinyls</p>
          <FontAwesomeIcon icon={faCompactDisc} />
        </Link>
        <Link to={``} className="flex items-center justify-between w-full pr-4">
          <p>Lessons</p>
          <FontAwesomeIcon icon={faGraduationCap} />
        </Link>
        <Link to={``} className="flex items-center justify-between w-full pr-4">
          <p>About Us</p>
          <FontAwesomeIcon icon={faSitemap} />
        </Link>
      </nav>
    </div>
  );
};
