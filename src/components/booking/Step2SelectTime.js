import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
import "../../pages/Booking.css";
import Btn from "../Btn";
import {
  fetchAvailableSlotsFromSquare,
  saveBookingToSquare,
} from "../../services/squareupService";
import "react-calendar/dist/Calendar.css";

const Step2SelectTime = ({
  bookingData,
  updateBookingData,
  nextStep,
  prevStep,
}) => {
  const [datesAndTimes, setDatesAndTimes] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch slots from Square
  useEffect(() => {
    const fetchData = async () => {
      try {
        const slots = await fetchAvailableSlotsFromSquare("YOUR_LOCATION_ID");
        setDatesAndTimes(slots);
      } catch (error) {
        console.error("Error fetching available slots:", error);
      }
    };
    fetchData();
  }, []);

  // Update available times when a date is selected
  useEffect(() => {
    if (selectedDate) {
      const timesForDate = datesAndTimes
        .filter((slot) => slot.start_at.split("T")[0] === selectedDate)
        .map((slot) =>
          new Date(slot.start_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      setAvailableTimes(timesForDate);
    } else {
      setAvailableTimes([]);
    }
  }, [selectedDate, datesAndTimes]);

  // Handle date selection
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    updateBookingData("date", formattedDate);
  };

  // Handle time selection
  const handleTimeClick = (time) => {
    updateBookingData("time", time);
  };

  const handleSave = async () => {
    try {
      const bookingDataToSave = {
        location_id: "YOUR_LOCATION_ID",
        customer_id: bookingData.customer_id,
        start_at: `${bookingData.date}T${bookingData.time}:00Z`,
        appointment_segments: [
          {
            service_variation_id: bookingData.service_id,
            team_member_id: bookingData.team_member_id,
            duration_minutes: bookingData.duration_minutes || 60,
          },
        ],
      };

      await saveBookingToSquare(bookingDataToSave);
      alert("Booking successfully saved!");
      nextStep();
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <div className="calendar-container">
        {/* <Calendar
          onChange={handleDateChange}
          value={selectedDate ? new Date(selectedDate) : null}
          tileClassName={({ date }) => {
            const formattedDate = date.toISOString().split("T")[0];
            return datesAndTimes.some(
              (slot) => slot.start_at.split("T")[0] === formattedDate
            )
              ? "calendar-day available"
              : null;
          }}
          minDate={new Date()}
        /> */}

        <div className="time-slots">
          <p id="title">
            {selectedDate
              ? `${new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}`
              : "Please select a date"}
          </p>
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <button
                key={index}
                className={`time-slot ${
                  bookingData.time === time ? "selected" : ""
                }`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))
          ) : (
            <p>No available times</p>
          )}
        </div>
      </div>

      <div className="button-container">
        <Btn
          customButtonClass="white white-step-2-select-time"
          onClick={prevStep}
        >
          Back
        </Btn>
        <Btn
          customButtonClass="green green-step-2-select-time"
          onClick={handleSave}
          disabled={!bookingData.date || !bookingData.time}
        >
          Next
        </Btn>
      </div>
    </div>
  );
};

export default Step2SelectTime;
