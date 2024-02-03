// ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ reviewerName, rating, comment });
    // Clear form fields after submission
    setReviewerName('');
    setRating('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Reviewer Name:
        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
