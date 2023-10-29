import React from "react";
import Icon from "../../icons/star.svg";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(rating)].map((i) => (
        <Icon key={i} />
      ))}
    </div>
  );
};

export default Rating;
