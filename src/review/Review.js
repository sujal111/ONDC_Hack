// Review.js
import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <h3>{review.reviewerName}</h3>
      <p>Date: {review.date}</p>
      <p>Rating: {review.rating}</p>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
