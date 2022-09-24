import React from "react";
// global style
// import "./global.css";
// import DarkMode from "./components/DarkMode/DarkMode";
// import Home from "./components/CustomNavbarWithSidebar/Home";
// import Contact from "./components/CustomNavbarWithSidebar/Contact";
// import Product from "./components/CustomNavbarWithSidebar/Product";
// import Service from "./components/CustomNavbarWithSidebar/Services";
// import SignUp from "./components/CustomNavbarWithSidebar/SignUp";

import Navbar from "./components/CustomNavbarWithSidebar/Navbar";
import SimpleSearch from "./components/ReactSimpleSearch/SimpleSearch";
import AdvanceSearch from "./components/AdvanceSearchInput/AdvanceSearch";
import JsonData from "./components/AdvanceSearchInput/Data.json";
import GoogleMapFirst from "./components/GoogleMapFirst/GoogleMapFirst";
import Notification from "./components/Notification/Notification";
import Modal from "./components/Modal/Modal";
import AutomaticPopup from "./components/Modal/AutomaticPopup";
import FormOne from "./components/FormValidaton/FormOne";
import FormTwo from "./components/FormValidaton/FormTwo";
import { useState } from "react";
import { useRef } from "react";
import FormInput from "./components/FormValidaton/FormTwo";
import FormThree from "./components/FormValidaton/FormThree";
import GeneratePassword from "./components/PasswordGenerator/GeneratePass";
import Home from "./pages/Home";
import About from "./pages/About";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
