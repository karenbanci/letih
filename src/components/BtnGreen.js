import React from "react";
import "./Btn.css";

const BtnGreen = ({ children, onClick }) => {
  return (
    <button className="custom-button green" onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnGreen;
