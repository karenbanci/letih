import React, { useState } from "react";
import "./Testimonials.css"; // Adicione seu CSS personalizado

function Testimonials({ testimonialData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  // Verifica se testimonialData está definido antes de tentar renderizar
  if (!testimonialData || testimonialData.length === 0) {
    return <div>Loading Testimonials...</div>;
  }

  return (
    <div className="testimonial-container">
      <div className="carousel">
        <div className="carousel-item">
          <div>
            <img
              src={testimonialData[currentIndex]?.customerImage?.url}
              alt={testimonialData[currentIndex]?.customerImage?.title}
            />
          </div>
          <div className="testimonial-content">
            <h1 id="title">Testimonials</h1>
            <h4>Briefly title about the customer review </h4>
            <p className="customer testimonial">
              <span className="quote">" </span>
              {testimonialData[currentIndex]?.quote?.json?.content[0]
                ?.content[0]?.value || "No quote available"}
              <span className="quote"> "</span>
            </p>

            <p className="customer name">
              <span className="quote">- </span>
              {testimonialData[currentIndex]?.customerName || "Anonymous"}
            </p>
            <button className="carousel-control prev" onClick={prev}>
              <svg
                width="31"
                height="8"
                viewBox="0 0 31 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.646444 3.64645C0.451183 3.84171 0.451183 4.15829 0.646444 4.35355L3.82842 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.73079 0.976311 4.73079 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82842 0.464466L0.646444 3.64645ZM31 3.5L0.999998 3.5V4.5L31 4.5V3.5Z"
                  fill="#F7F7F7"
                />
              </svg>
            </button>
            <button className="carousel-control next" onClick={next}>
              <span
                className="icon-container"
                style={{ transform: "rotate(180deg)" }}
              >
                <svg
                  width="31"
                  height="8"
                  viewBox="0 0 31 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    d="M0.646444 3.64645C0.451183 3.84171 0.451183 4.15829 0.646444 4.35355L3.82842 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.73079 0.976311 4.73079 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82842 0.464466L0.646444 3.64645ZM31 3.5L0.999998 3.5V4.5L31 4.5V3.5Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
