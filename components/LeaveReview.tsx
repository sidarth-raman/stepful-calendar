import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Review = ({ pastBookings }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [reviewData, setReviewData] = useState({ satisfaction: 1, notes: '' });

  const handleAddReviewClick = (booking) => {
    setSelectedBooking(booking);
    setShowReviewForm(true);
  };

  const handleReviewSubmit = async () => {
    // Log the selected booking and review data for debugging purposes
    console.log('Review submitted for booking:', selectedBooking);
    console.log('Review Data:', reviewData);

    // Check if there's a selected booking to avoid errors
    if (!selectedBooking) {
        console.error('No selected booking to submit a review for.');
        return;
    }

    // Construct the review data object
    const reviewInfo = {
        Coach: selectedBooking.Coach,
        Student: selectedBooking.Student,
        DateTime: selectedBooking.DateTime,
        Satisfaction: reviewData.satisfaction, 
        Notes: reviewData.notes
    };

    const formattedDateTime = new Date(selectedBooking.DateTime).toISOString().slice(0, 19).replace('T', ' ');

    try {
        // Send a POST request to your backend
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              coach: selectedBooking.Coach,
              student: selectedBooking.Student,
              dateTime: formattedDateTime,
              satisfaction: reviewData.satisfaction, 
              notes: reviewData.notes
            })
        });

        // Check if the response is successful
        if (response.ok) {
            const result = await response.json();
            console.log('Review successfully submitted:', result);

            // Reset the form after successful submission
            setShowReviewForm(false);
            setReviewData({ satisfaction: 1, notes: '' });
        } else {
            // Handle non-200 responses
            const error = await response.json();
            console.error('Error submitting review:', error.message);
            alert('Error submitting review: ' + error.message);
        }
    } catch (err) {
        // Catch and log any errors that occur during the fetch
        console.error('Network error:', err);
        alert('Network error occurred while submitting the review.');
    }
  };

  return (
    <div className="bookings-container">
      <h1>Past Bookings</h1>
      <ul>
        {pastBookings.map((booking, index) => (
          <li key={index} className="booking-item">
            {booking.Coach} - {booking.Student} - {new Date(booking.DateTime).toLocaleString()}
            <button onClick={() => handleAddReviewClick(booking)} className="review-button">Add Review</button>
          </li>
        ))}
      </ul>

      {showReviewForm && (
        <div className="review-modal">
          <h2>Leave a Review for {selectedBooking.Student}</h2>
          <label>
            Satisfaction (1-5):
            <input
              type="number"
              value={reviewData.satisfaction}
              onChange={(e) => setReviewData({ ...reviewData, satisfaction: parseInt(e.target.value, 10) })}
              min="1"
              max="5"
              className="satisfaction-input"
            />
          </label>
          <label>
            Notes:
            <textarea
              value={reviewData.notes}
              onChange={(e) => setReviewData({ ...reviewData, notes: e.target.value })}
              className="notes-textarea"
            />
          </label>
          <button onClick={handleReviewSubmit} className="submit-review-button">Submit Review</button>
          <button onClick={() => setShowReviewForm(false)} className="cancel-review-button">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Review;
