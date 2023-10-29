import React from "react";
import Rating from "./Rating";

const Review = ({ review }) => {
  const { author, color, target_property: property, rating, content } = review;
  return (
    <li className="review">
      <div className="header">
        <div className="left">
          <div
            className="avatar"
            style={{ background: color }}
            data-color={color}
          >
            <strong className="initial">{author.charAt(0)}</strong>
          </div>
          <div className="meta">
            <p className="author-name">
              <strong>{author}</strong>
            </p>
            <p className="target-property">
              about {` `}
              <strong>{property}</strong>
            </p>
          </div>
        </div>
        <Rating rating={rating} />
      </div>
      <div className="body">
        <p>{content}</p>
      </div>
    </li>
  );
};

export default Review;
