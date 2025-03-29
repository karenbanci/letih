import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProductsByClient } from "../services/airtableService";

const LogInPage = () => {
  const [login, setLogin] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!login.trim()) {
      setError("Please enter your login.");
      return;
    }

    try {
      // Simula busca do cliente pelo login no Airtable
      const clientName =
        login === "john123"
          ? "John Doe"
          : login === "jane456"
          ? "Jane Smith"
          : null;

      if (!clientName) {
        setError("Client not found! Please check your login.");
        return;
      }

      // Salva o nome do cliente no estado ou redireciona para a página de produtos
      navigate(`/products/${clientName}`); // Redireciona para a página de produtos
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Log in</h2>
      <input
        type="text"
        placeholder="Enter your login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LogInPage;
