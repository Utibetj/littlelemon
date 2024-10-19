
import React from 'react';

const BookingSlot = ({ times }) => {
  return (
    <div>
      <h2>Available Booking Slots</h2>
      <ul>
        {times.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSlot;
