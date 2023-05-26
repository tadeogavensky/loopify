import React from "react";
import { Link } from "react-router-dom";
export const SubHeader = () => {
  let product = {
    type: "guitars",
  };
  return (
    <header className="sm:flex flex-col sm:flex-row hidden justify-evenly text-white text-lg w-full">
      <Link to={`/products/${product.type}`} className="link-item">
        Guitars
      </Link>
      <Link to={`/products/${product.type}`} className="link-item">
        Pedals
      </Link>
      <Link to={`/products/${product.type}`} className="link-item">
        Accessories
      </Link>
      <Link to={`/products/${product.type}`} className="link-item">
        Vinyls
      </Link>
      <Link to={`/products/${product.type}`} className="link-item">
        Lessons
      </Link>
      <Link to={`/products/${product.type}`} className="link-item">
        About Us
      </Link>
    </header>
  );
};
