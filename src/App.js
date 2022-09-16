import React from "react";
// global style
import "./global.css";
// import DarkMode from "./components/DarkMode/DarkMode";
import Home from "./components/CustomNavbarWithSidebar/Home";
import Contact from "./components/CustomNavbarWithSidebar/Contact";
import Product from "./components/CustomNavbarWithSidebar/Product";
import Service from "./components/CustomNavbarWithSidebar/Services";
import SignUp from "./components/CustomNavbarWithSidebar/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/CustomNavbarWithSidebar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
