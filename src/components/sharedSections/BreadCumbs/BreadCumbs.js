import React from "react";
import "./BreadCumbs.css";

const BreadCumbs = (props) => {
  return (
    <div className="bread-cumbs-wrapper pt-36 pb-24 mb-24">
      <div className="text-6xl text-white">
        {props.goPro?.name ? props.goPro.name : props.title}
      </div>
      <div className="text-xl text-white">
        Includes 1-year GoPro Subscription
      </div>
    </div>
  );
};

export default BreadCumbs;
