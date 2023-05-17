import React from "react";
import { Link } from "react-router-dom";

import DoneIcon from "@mui/icons-material/Done";

export const Registration = () => {
  return (
    <div className="flex  flex-col  bg-white justify-around">
      <div className="flex min-h-full flex-1 flex-col items-center px-6 py-12 lg:px-8">
        <Link to={"/"}>
          <h1 className="text-[#FF753A] text-[30px] uppercase mr-7 sm:mr-0 worksans-bold">
            Loopi
            <span className="text-[#00BFFF]">fy</span>
          </h1>
        </Link>

        <p className="text-lg sm:text-2xl worksans-regular mt-10 border-b-[#FF753A] border-b-4 pb-2 ">
          Create your account
        </p>

        <div className="mt-10 sm:mx-auto ">
          <form action="" className="space-y-6">
            <div className="flex items-center justify-between w-full flex-wrap ">
              <div className="flex flex-col sm:w-[48%] w-full mb-6 sm:mb-0">
                <label>First Name</label>
                <input
                  type="text"
                  className="px-1 py-1.5 border-black border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col sm:w-[48%] w-full">
                <label>Last Name</label>
                <input
                  type="text"
                  className="px-2 py-1.5 border-black border-2 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Email address</label>
              <input
                type="text"
                className="px-2 py-1.5 border-black border-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                type="text"
                className="px-2 py-1.5 border-black border-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex-1">Password</label>
              <input
                type="password"
                className="px-2 py-1.5 border-black border-2 rounded-md"
              />
              <div className="mt-2"> 
                <ul>
                  <li>
                    <DoneIcon sx={{color:"#FF753A"}} />
                  </li>
                  <li>
                    <DoneIcon sx={{color:"#FF753A"}} />
                  </li>
                  <li>
                    <DoneIcon sx={{color:"#FF753A"}} />
                  </li>
                  <li>
                    <DoneIcon sx={{color:"#FF753A"}} />
                  </li>
                  <li>
                    <DoneIcon sx={{color:"#FF753A"}} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="flex-1">Confirm Password</label>
              <input
                type="password"
                className="px-2 py-1.5 border-black border-2 rounded-md"
              />
            </div>

            <button className="w-full bg-[#FF753A] shadow-md hover:bg-[#FF8C42]  transition all duration-300 font-medium text-white text-sm px-8 py-2 rounded-md">
              Sing up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};