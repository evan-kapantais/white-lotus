import React from "react";
import reviews from "../../data/reviews";
import Review from "./Review";

const Reviews = () => {
  return (
    <ul className="reviews">
      {reviews.map((review, i) => (
        <Review key={i} review={review} />
      ))}
    </ul>
  );
};

export default Reviews;
