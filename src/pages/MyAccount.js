import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyAccount.css";
import Btn from "../components/Btn";

const MyAccount = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    navigate(`/products/${name.trim()}`); // Redireciona para a página de produtos
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("Please enter your full name."); // Validação para nome vazio
      return;
    }

    setErrorMessage("");
    navigate(`/products/${name.trim()}`);
  };

  return (
    <div className="myAccount-container">
      <div className="green-box">
        <div className="content">
          <h1>WELCOME TO LETIH BEAUTY</h1>
          <p>
            Add your name and last name to have access to your treatment or
            procedure informations
          </p>
          <p id="input-description">First name and last name</p>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Full name"
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <Btn customButtonClass="white" onClick={handleLogIn}>
              Log in
            </Btn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
