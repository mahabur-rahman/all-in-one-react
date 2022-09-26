import React from "react";
// global style
import "./global.css";
// import DarkMode from "./components/DarkMode/DarkMode";
// import Home from "./components/CustomNavbarWithSidebar/Home";
// import Contact from "./components/CustomNavbarWithSidebar/Contact";
// import Product from "./components/CustomNavbarWithSidebar/Product";
// import Service from "./components/CustomNavbarWithSidebar/Services";
// import SignUp from "./components/CustomNavbarWithSidebar/SignUp";
// import Navbar from "./components/CustomNavbarWithSidebar/Navbar";
// import SimpleSearch from "./components/ReactSimpleSearch/SimpleSearch";
// import AdvanceSearch from "./components/AdvanceSearchInput/AdvanceSearch";
// import JsonData from "./components/AdvanceSearchInput/Data.json";
// import GoogleMapFirst from "./components/GoogleMapFirst/GoogleMapFirst";
// import Notification from "./components/Notification/Notification";
// import Modal from "./components/Modal/Modal";
// import AutomaticPopup from "./components/Modal/AutomaticPopup";
// import FormOne from "./components/FormValidaton/FormOne";
// import FormTwo from "./components/FormValidaton/FormTwo";
// import { useState } from "react";
// import { useRef } from "react";
// import FormInput from "./components/FormValidaton/FormTwo";
// import FormThree from "./components/FormValidaton/FormThree";
// import GeneratePassword from "./components/PasswordGenerator/GeneratePass";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Header from "./pages/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import OrderSummary from "./pages/OrderSummary";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProducts from "./components/NewProducts";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Product />}>
            <Route index element={<FeaturedProduct />} />
            <Route path="featured" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
