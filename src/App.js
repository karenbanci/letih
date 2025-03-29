import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import MyAccount from "./pages/MyAccount.js";
import Layout from "./components/Layout";
import FacialService from "./pages/service/FacialService.jsx";
import ServicePage from "./pages/service/ServicePage.jsx";
import Booking from "./pages/Booking.js";
import ProductsPage from "./pages/ProductsPage";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/facial/:slug" element={<FacialService />} />
          <Route path="/service/:slug" element={<ServicePage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/products/:clientLogin" element={<ProductsPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
