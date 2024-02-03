// ReviewsList.js
import React from 'react';
import Review from './Review';

const ReviewsList = ({ reviews }) => {
  return (
    <div className="reviews-list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
