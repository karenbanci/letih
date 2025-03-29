import React from "react";
import "../../pages/Booking.css";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="progress-bar-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item ${currentStep === index + 1 ? "active" : ""} ${
            currentStep > index + 1 ? "completed" : ""
          }`}
        >
          <div className="step-circle"></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
