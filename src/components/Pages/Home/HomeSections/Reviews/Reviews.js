import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-bayou-40164.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="title p-14 bg-indigo-600 text-white mt-24">
        <h1 className="text-4xl	">Customers Reviews</h1>
      </div>
      <Slider
        {...settings}
        className="flex items-center justify-center px-5 py-5 bg-blue-100 pt-24 pb-24"
      >
        {reviews.map((review) => (
          <Review review={review} key={Math.random()}></Review>
        ))}
      </Slider>
    </>
  );
};

export default Reviews;
