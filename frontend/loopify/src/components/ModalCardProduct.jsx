import React from "react";
import { Link } from "react-router-dom";

export const ModalCardProduct = (props) => {
  return (
    <div className="sm:bg-black bg-opacity-20 flex justify-center items-center absolute  z-20 w-screen h-screen">
      <div className=" w-[800px] bg-white rounded-md shadow-lg flex flex-row  flex-wrap space-x-4 pl-8 pt-8 pr-8 pb-8 sm:mx-0 mx-6">
        <div className="sm:w-[40%] sm:h-[10%] w-full h-full bg-slate-100 rounded-lg">
          <img
            src={props.product.image}
            className="object-cover w-full  "
            alt=""
          />
        </div>
        <div className="flex flex-col items-center flex-1 space-y-4">
          <div className="flex flex-col items-start space-y-2">
            <div className="flex flex-row w-full justify-between">
              <p className="text-2xl font-bold">{props.product.name}</p>
              <button
                onClick={() => {
                  props.onClose();
                }}
              >
                Close
              </button>
            </div>

            <p className="text-lg">${props.product.price}</p>
            <p className="">{props.product.long_description}</p>
            <p className="">{props.product.rating}</p>

            <p className="">{props.product.description}</p>

            <p className="">Model</p>
            {/*Models*/}

            <button className="w-full bg-[#FF753A] shadow-md hover:bg-[#C55E25] transition all duration-300 font-medium text-white text-[12px] px-8 py-2 rounded-full uppercase">
              Add to basket
            </button>
          </div>
          <Link
            to={`/product/${props.product.id}`}
            className="text-center font-semibold"
          >
            View full details
          </Link>
        </div>
      </div>
    </div>
  );
};
