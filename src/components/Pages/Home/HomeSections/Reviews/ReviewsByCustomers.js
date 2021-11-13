import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Rating from "react-rating";
import "./Review.css";

const ReviewsByCustomers = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-bayou-40164.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <>
      <div className="title p-14 bg-indigo-600 text-white mt-24">
        <h1 className="text-4xl	">Customers Reviews</h1>
      </div>
      <div className="flex items-center justify-center px-5 py-5 bg-blue-100 pt-24 pb-24 customer-review">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {reviews.map((review) => (
            <React.Fragment key={review._id}>
              <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50 carousel-wrapper">
                <div className="w-full mb-10">
                  <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                    “
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                    {review?.reviewMessage}
                  </p>
                  <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                    ”
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-xs text-gray-500 dark:text-yellow text-center cstar-rating">
                    <Rating
                      initialRating={review?.reviewRating}
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      readonly
                    />
                  </p>
                  <p className="text-md text-indigo-500 font-bold text-center">
                    {review?.reviewer}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ReviewsByCustomers;
