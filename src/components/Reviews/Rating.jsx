import React from "react";
import Icon from "../../icons/star.svg";

const Rating = ({ rating }) => (
  <div className="rating">
    {[...Array(rating)].map((i, index) => (
      <Icon key={index} />
    ))}
  </div>
);

export default Rating;
