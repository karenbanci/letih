import React from "react";
import "../../pages/Booking.css";

const Step4Confirmation = ({ bookingData, bookingId }) => (
  <div className="confirmation-container">
    <h2>Booking Confirmed!</h2>
    <p>Thank you for booking with us. Here are your details:</p>
    <ul>
      <li>
        <strong>Booking ID:</strong> {bookingId}
      </li>
      <li>
        <strong>Service:</strong> {bookingData.service}
      </li>
      <li>
        <strong>Date:</strong>{" "}
        {new Date(bookingData.date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </li>
      <li>
        <strong>Time:</strong> {bookingData.time}
      </li>
      <li>
        <strong>Name:</strong> {bookingData.name}
      </li>
    </ul>
    <button onClick={() => (window.location.href = "/")}>Back to Home</button>
  </div>
);

export default Step4Confirmation;
