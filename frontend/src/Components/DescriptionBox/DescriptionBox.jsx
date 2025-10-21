import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description </div>
        <div className="descriptionbox-nav-box fade">Reviews(122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          {" "}
          Welcome to our online store — where design meets functionality.
          Explore a curated selection of products crafted to elevate your
          everyday experience.
        </p>
        <p>
          {" "}
          Stay tuned as we continue building something beautiful, intuitive, and
          tailored just for you.
        </p>
      </div>
    </div>
  );
};
