import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
export const ModalCardProduct = (props) => {
  const renderStars = () => {
    const rating = props.product.rating;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon className="text-[#FF753A]" key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalfIcon className="text-[#FF753A]" key={fullStars} />);
    }
    return stars;
  };

  return (
    <div className="bg-black bg-opacity-40 flex justify-center items-center absolute z-20 w-screen h-[10000px]">
      <div className=" w-[800px] bg-white rounded-md shadow-lg flex flex-row  flex-wrap space-x-0 sm:space-x-4  pl-8 pt-8 pr-8 pb-8 mx-8">
        <div className="sm:w-[40%] sm:h-[10%] w-full h-full bg-slate-100 rounded-lg">
          <img
            src={props.product.image}
            className="object-cover w-full  "
            alt=""
          />
        </div>
        <div className="flex flex-col items-center flex-1  sm:space-y-4">
          <div className="flex flex-col items-start space-y-3 mt-5 sm:mt-0">
            <div className="flex flex-row w-full justify-between">
              <p className="text-2xl font-bold">{props.product.name}</p>
              <button
                onClick={() => {
                  props.onClose();
                }}
                className="font-bold"
              >
                Close
              </button>
            </div>
            <div className="flex items-center gap-2 text-md">
              <p className="">{props.product.category}</p>
              <span>|</span>
              <p className="">${props.product.price}</p>
            </div>

            <div className="flex items-center gap-1">
              {renderStars()}
            </div>
            <p className="">{props.product.long_description}</p>

            <button className="w-full bg-[#FF753A] shadow-md hover:bg-[#C55E25] transition all duration-300 font-medium text-white text-[12px] px-8 py-2 rounded-full">
              Add to basket
            </button>
          </div>
          <Link
            to={`/product/${props.product.id}`}
            className="text-center font-semibold mt-4"
          >
            View full details
          </Link>
        </div>
      </div>
    </div>
  );
};
