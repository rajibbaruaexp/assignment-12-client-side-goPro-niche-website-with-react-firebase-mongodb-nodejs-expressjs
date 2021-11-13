import React from "react";
import { Link } from "react-router-dom";
import "./GoPro.css";

const SingleGoPro = (props) => {
  const { _id, name, price, details, img } = props.goPro;
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 singleGoProWrapper">
        <img className="rounded-t-lg" src={img} alt="" />
        <p>Price: ${price}</p>
        <div className="p-5 text-left">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {name}
          </h5>
          <p className="font-normal  text-gray-700 p-1">
            {details.slice(0, 100)}...
          </p>
          <Link to={`/checkOut/${_id}`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 mt-4">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleGoPro;
