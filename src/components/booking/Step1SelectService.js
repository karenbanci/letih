import React from "react";
import "../../pages/Booking.css";
import Btn from "../Btn";

const Step1SelectService = ({
  bookingData,
  updateBookingData,
  nextStep,
  bookData,
}) => (
  <div>
    <p>Please select a service:</p>
    <select
      className="select-service select-wrapper "
      value={bookingData.service}
      onChange={(e) => updateBookingData("service", e.target.value)}
    >
      <option value="">Select treatment</option>
      {bookData?.treatmentListCollection?.items?.map((item) => (
        <option key={item.title} value={item.title}>
          {item.title}
        </option>
      ))}
    </select>
    <Btn
      customButtonClass="green step-1-select-service "
      onClick={nextStep}
      disabled={!bookingData.service}
    >
      Next
    </Btn>
  </div>
);

export default Step1SelectService;
