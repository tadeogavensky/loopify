import React from "react";

import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex min-h-[860px] flex-col  bg-white justify-around">
      <div className="flex min-h-full flex-1 flex-col items-center mt-16 px-6 py-12 lg:px-8">
        <Link to={"/"}>
          <h1 className="text-black text-[30px] uppercase mr-7 sm:mr-0 worksans-bold">
            Loopi
            <span className="text-[#FF753A]">fy</span>
          </h1>
        </Link>

        <p className="text-2xl worksans-bold mt-10 ">Sign in to your account</p>

        <div className="mt-10 sm:mx-auto sm:w-full w-full sm:max-w-sm">
          <form action="" className="space-y-6">
            <div className="flex flex-col">
              <label>Email address</label>
              <input
                type="text"
                className="px-2 py-1.5 border-black border-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <label>Password</label>{" "}
                <Link
                  to={"/forgot-password"}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                className="px-2 py-1.5 border-black border-2 rounded-md"
              />
            </div>

            <button className="w-full bg-[#FF753A] shadow-md hover:bg-[#FF8C42]  transition all duration-300 font-medium text-white text-sm px-8 py-2 rounded-md">
              Sign in
            </button>
          </form>
          <div className="flex items-center justify-center mt-10 text-sm flex-wrap ">
            <p className="text-gray-500 mr-2">Not a member?</p>
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Tune your world now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};