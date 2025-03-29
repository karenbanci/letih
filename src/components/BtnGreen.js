import React from "react";
import "./Btn.css";

const BtnGreen = ({ children, onClick, href, customButtonClass = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`custom-button green ${customButtonClass}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default BtnGreen;
