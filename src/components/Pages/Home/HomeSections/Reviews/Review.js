import React from "react";
import Rating from "react-rating";
import "./Review.css";

const Review = (props) => {
  const { reviewer, reviewRating, reviewMessage } = props.review;
  return (
    <div>
      <div>
        <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
              {reviewMessage}
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs text-gray-500 dark:text-yellow text-center cstar-rating">
              <Rating
                initialRating={reviewRating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              />
            </p>
            <p className="text-md text-indigo-500 font-bold text-center">
              {reviewer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
