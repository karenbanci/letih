import "./Booking.css";
import Btn from "../components/Btn";
import { fetchPageData } from "../services/contentfulService.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Step1SelectService from "../components/booking/Step1SelectService";
import Step2SelectTime from "../components/booking/Step2SelectTime";
import Step3Details from "../components/booking/Step3Details";
import Step4Confirmation from "../components/booking/Step4Confirmation";
import ProgressBar from "../components/booking/ProgressBar.js";

const Booking = () => {
  const [data, setData] = useState(null); // Stores data from Contentful
  const [step, setStep] = useState(1); // Tracks current step in booking process
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [bookingId, setBookingId] = useState(""); // Stores confirmed booking ID

  // Steps for progress bar
  const steps = ["Service", "Time", "Details", "Done"];
  const currentStep = step;

  // Fetch Contentful data
  const getData = async () => {
    try {
      const result = await fetchPageData("booking");
      setData(result.data);
    } catch (error) {
      console.error(
        "Error fetching Contentful data:",
        error.response || error.message
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Extract data for the current booking
  const bookData = data?.bookingCollection?.items?.[0];
  // console.log("bookData", bookData);

  if (!data) {
    return <p>Loading...</p>;
  }

  // Handle update to booking data
  const updateBookingData = (field, value) => {
    setBookingData({ ...bookingData, [field]: value });
  };

  // Handle booking submission
  const submitBooking = async () => {
    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_TABLE_BOOKED}`,
        {
          fields: {
            "Full Name": bookingData.name,
            Email: bookingData.email,
            Phone: bookingData.phone,
            Notes: bookingData.notes,
            Service: bookingData.service,
            "Date & Time": `${bookingData.date}T${bookingData.time}`,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setBookingId(response.data.id); // Salvar o ID da reserva retornado pelo Airtable
      setStep(4); // Avançar para a página de confirmação
    } catch (error) {
      console.error("Error submitting booking to Airtable:", error);
      alert("There was an issue submitting your booking. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-steps">
        <h1>{bookData?.title || "Booking Appointment"}</h1>
        {/* Render ProgressBar */}
        <ProgressBar steps={steps} currentStep={currentStep} />

        {/* Booking Steps */}
        {step === 1 && (
          <Step1SelectService
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            nextStep={() => setStep(2)}
            bookData={bookData}
          />
        )}
        {step === 2 && (
          <Step2SelectTime
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            nextStep={() => setStep(3)}
            prevStep={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step3Details
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            submitBooking={submitBooking}
            prevStep={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <Step4Confirmation bookingData={bookingData} bookingId={bookingId} />
        )}
      </div>
      <img
        src={bookData?.image?.url}
        alt={bookData?.image?.description || ""}
      />
    </div>
  );
};

export default Booking;
