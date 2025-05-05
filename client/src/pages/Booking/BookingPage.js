import React from 'react';
import BookingSteps from '../components/booking/BookingSteps';

const Booking = () => {
  return (
    <div className="booking-page">
      <h1>Book Your Movie</h1>
      <BookingSteps />
    </div>
  );
};

export default Booking;