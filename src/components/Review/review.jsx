import React, { useState } from 'react';
import './review.css'; // Import the CSS file for styling

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, content: 'Great product!' },
    { id: 2, content: 'Excellent service!' },
    // Add more reviews here...
  ]);

  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    if (newReview) {
      const review = {
        id: Date.now(),
        content: newReview,
      };
      setReviews([...reviews, review]);
      setNewReview('');
    }
  };

  const handleDeleteReview = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <p>{review.content}</p>
            <button
              onClick={() => handleDeleteReview(review.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="add-review">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review..."
          className="review-input"
        ></textarea>
        <button onClick={handleAddReview} className="add-button">
          Add Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
