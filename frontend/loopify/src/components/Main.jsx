import React from "react";

import { Carousel } from "react-responsive-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import boss from "../assets/images/brands/boss.png";
import fender from "../assets/images/brands/fender.png";
import gibson from "../assets/images/brands/gibson.png";
import taylor from "../assets/images/brands/taylor.png";
import martin from "../assets/images/brands/martin.png";
import yamaha from "../assets/images/brands/yamaha.png";

import lx1 from "../assets/images/lx1.png";

import ed from "../assets/images/ed.png";

import arrow from "../assets/images/Arrow_22.svg";
import { Card } from "./Card";

const product = {
  id: 1,
  image: lx1,
  category: "Acoustic Guitars",
  price: 299.99,
  name: "Martin LX1",
  short_description:
    "The Little Martin LX1: small in size, big in tone. Ideal for travel, practice, and casual playing. Includes sustainable wood parts.",
};

export const Main = () => {
  return (
    <div className="px-12">
      <Featured />
      <Brands />
      <NewProducts />
      <Incentives />
    </div>
  );
};

const Brands = () => {
  return (
    <div className="flex items-center justify-center space-x-12 my-10">
      <button className="w-[120px] ">
        <img src={boss} alt="" className="object-contain" />
      </button>
      <button className="w-[120px] ">
        <img src={taylor} alt="" className="object-contain" />
      </button>
      <button className="w-[120px] ">
        <img src={martin} alt="" className="object-contain" />
      </button>
      <button className="w-[120px]">
        <img
          src={fender}
          alt=""
          className="object-contain grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
      </button>
      <button className="w-[120px] ">
        <img src={gibson} alt="" className="object-contain" />
      </button>
      <button className="w-[120px] ">
        <img
          src={yamaha}
          alt=""
          className="object-contain grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="flex items-center justify-center  2xl:justify-around flex-wrap my-12 space-x-12 space-y-12">
      <div className="text-left w-full md:w-[500px]">
        <h1 className="text-[40px] text-left md:text-[60px] font-bold">
          Fullfilling <span className="text-[#FF753A]">Dreams</span> With
          Strings Attached.
          <span className="hidden sm:flex">(Like Ed).</span>
        </h1>
        <p>
          We sell high quality musical products for you to achieve the peak in
          perfomance.
        </p>
      </div>

      <div className="w-[400px] bg-gradient-to-l  from-[#FF753A] rounded-md justify-center items-center shadow-lg hidden sm:flex">
        <img src={arrow} alt="" className="relative bottom-20 rotate-45" />
        <img src={ed} alt="" className="object-cover" />
      </div>
    </div>
  );
};

const NewProducts = () => {
  const latestProducts = [];
  return (
    <div className="mb-12">
      <div className="flex flex-col items-center my-8">
        <span className=" border-t-[6px] bordert border-[#E7613E] text-white   cursor-default">
          aaaaaaaaaaa
        </span>
        <h1 className="worksans-bold text-center text-2xl">New Products</h1>
      </div>
      <div className="relative">
        <img
          src="https://www.nespresso.com/shared_res/agility/n-components/cross-sell/texture_XL.png"
          className="absolute sm:hidden md:right-[15%] md:top-[-2%] lg:right-[20%] lg:top-[-5%] hidden md:block"
          alt=""
        />
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-4 relative z-10">
          {latestProducts && (
            <>
              <Card product={product} />
              <Card product={product} />
              <Card product={product} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Incentives = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-8">
        <h1 className="worksans-bold text-center text-2xl mb-12">
          We are your gateway to the world of music
        </h1>

        <div className="flex flex-row flex-wrap items-baseline space-y-4">
          <div className="sm:flex-1 flex-grow">
            <Incentive
              icon={<LocalShippingOutlinedIcon sx={{ fontSize: "2rem", color: "#" }} />}
              title={"Free shipping"}
              text={
                "Experience the ultimate convenience with our exclusive offer of free shipping on all orders."
              }
            />
          </div>
          <div className="sm:flex-1 flex-grow">
            <Incentive
              icon={<LoyaltyOutlinedIcon sx={{ fontSize: "2rem" }} />}
              title={"Guitar strings for life"}
              text={
                "Purchase any guitar from us and enjoy free string replacements every time one breaks!"
              }
            />
          </div>
          <div className="sm:flex-1 flex-grow">
            <Incentive
              icon={<SchoolOutlinedIcon sx={{ fontSize: "2rem" }} />}
              title={"3 hour lesson"}
              text={
                "Start your musical journey with us and get a free 3-hour lesson when you purchase your first instrument!"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Incentive = (props) => {
  return (
    <div className="flex flex-col items-center">
      {props.icon}
      <p className="text-md font-semibold my-2 ">{props.title}</p>
      <p className="text-sm text-center">{props.text}</p>
    </div>
  );
};