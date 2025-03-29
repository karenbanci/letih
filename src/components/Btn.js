import React from "react";
import "./Btn.css";

const Btn = ({
  children,
  onClick,
  href,
  type = "button",
  customButtonClass = "",
}) => {
  // Renderiza como <a> se o href for fornecido, caso contrário, como <button>
  if (href) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        className={`custom-button ${customButtonClass}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type} // Define o tipo do botão (default: "button")
      className={`custom-button ${customButtonClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Btn;
