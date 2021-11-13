import React, { useRef } from "react";
import useAuth from "../../../../hooks/useAuth";
import "./Review.css";

const Reviews = () => {
  const { user } = useAuth();
  const reviewMessageRef = useRef();
  const reviewRatingRef = useRef();

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const reviewer = user?.displayName;
    const reviewMessage = reviewMessageRef.current.value;
    const reviewRating = reviewRatingRef.current.value;

    if (parseInt(reviewRating) > 5) {
      alert("Please leave rating between 1 to 5");
      return;
    } else {
      // console.log(reviewRating, typeof parseInt(reviewRating));

      const newReview = { reviewer, reviewMessage, reviewRating };

      //sending review to database
      fetch("https://fathomless-bayou-40164.herokuapp.com/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Your review has been published!");
            reviewMessageRef.current.value = "";
            reviewRatingRef.current.value = "";
          }
        });
    }
  };

  return (
    <>
      <h3
        className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
capitalize"
      >
        <span>Add review</span>
      </h3>
      <div className="admin-wrapper review-wrapper">
        <form onSubmit={handleReviewSubmit}>
          <textarea
            required
            ref={reviewMessageRef}
            name="reviewMessage"
            placeholder="Write your review here..."
          ></textarea>
          <div>
            <p>Rate us on the scale of 5</p>
            <input required ref={reviewRatingRef} type="number" name="rating" />
          </div>
          <button>Leave a review</button>
        </form>
      </div>
    </>
  );
};

export default Reviews;
