// export default Step3Details;
import "../../pages/Booking.css";
import Btn from "../Btn";
import React, { useState } from "react";

const Step3Details = ({
  bookingData,
  updateBookingData,
  prevStep,
  goToConfirmation, // Função para navegar para a página de confirmação
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      const bookingData = {
        "Full Name": bookingData.name,
        Email: bookingData.email,
        Phone: bookingData.phone,
        Notes: bookingData.notes,
        Service: bookingData.service,
        "Date & Time": `${bookingData.date} ${bookingData.time}`,
      };

      console.log("Saving booking to Airtable:", bookingData);

      alert("Booking saved successfully!");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking. Please try again.");
    }
  };

  return (
    <div className="user-details-container">
      <p className="booking-summary">
        You selected a booking for <strong>{bookingData.service}</strong>, at{" "}
        <strong>{bookingData.time}</strong> on{" "}
        <strong>
          {new Date(bookingData.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </strong>
        .
      </p>
      <p>
        Please provide your details in the form below to proceed with booking.
      </p>

      <form className="booking-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Type your name"
          value={bookingData.name}
          onChange={(e) => updateBookingData("name", e.target.value)}
        />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone number"
              value={bookingData.phone}
              onChange={(e) => updateBookingData("phone", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={bookingData.email}
              onChange={(e) => updateBookingData("email", e.target.value)}
            />
          </div>
        </div>

        <label htmlFor="notes">Note</label>
        <textarea
          id="notes"
          placeholder="Add any important information"
          value={bookingData.notes}
          onChange={(e) => updateBookingData("notes", e.target.value)}
        />

        <div className="button-container">
          <Btn
            customButtonClass="white white-step-3-details"
            onClick={prevStep}
          >
            Back
          </Btn>
          <Btn
            customButtonClass="green green-step-3-details"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Next"}
          </Btn>
        </div>
      </form>
    </div>
  );
};

export default Step3Details;
