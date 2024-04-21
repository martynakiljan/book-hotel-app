/** @format */

import React from "react";
import Review from "./Review";
import { reviews } from "../data/reviews";

const getRandomReviews = () => {
  const randomIndex = Math.floor(Math.random() * reviews.length);
  return reviews.slice(randomIndex, randomIndex + 5);
};

const Reviews: React.FC = () => {
  const randomReviews = getRandomReviews();

  return (
    <div className="mx-auto w-70">
      <h2 className="text-2xl font-semibold mt-10 mb-10">
        See what others say:
      </h2>
      {randomReviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};

export default Reviews;
