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
import SimpleSearch from "./components/ReactSimpleSearch/SimpleSearch";
import AdvanceSearch from "./components/AdvanceSearchInput/AdvanceSearch";
import JsonData from "./components/AdvanceSearchInput/Data.json";
import GoogleMapFirst from "./components/GoogleMapFirst/GoogleMapFirst";
import Notification from "./components/Notification/Notification";

const App = () => {
  return (
    <>
      <Notification />
    </>
  );
};

export default App;
