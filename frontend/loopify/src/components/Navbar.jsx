import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faBars,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SubHeader } from "./SubHeader";

export const Navbar = () => {
  const [userLogged, setUserLogged] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(0);

  const showMenu = () => {
    setMenuOpen(true);
    setMenuOpacity(1);
  };

  const hideMenu = () => {
    setMenuOpen(false);
    setMenuOpacity(0);
  };
  return (
    <div className="flex flex-col  bg-[#252525] py-6 space-y-6">
      <nav className="flex flex-row sm:justify-around justify-between items-center flex-wrap">
        <button
          className="text-white md:hidden ml-8"
          onClick={() => {
            showMenu();
          }}
        >
          <FontAwesomeIcon icon={faBars} className="text-[40px]" />
        </button>

        <Link to={"/"}>
          <h1 className="text-[#F4F0EC] text-[30px] uppercase mr-7 sm:mr-0 worksans-bold">
            Loopi
            <span className="text-[#FF753A]">fy</span>
          </h1>
        </Link>

        <form action="" className=" items-center w-1/2 relative hidden sm:flex">
          <input
            type="text"
            placeholder="Search for a product..."
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
              className="hover:text-[#FF753A] text-lg text-white transition-all duration-200 ease-in-out"
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

        {menuOpen && <BurgerMenu opacity={menuOpacity} onClose={hideMenu} />}
      </nav>
      <SubHeader />
    </div>
  );
};

const BurgerMenu = () => {
  return <div></div>;
};
