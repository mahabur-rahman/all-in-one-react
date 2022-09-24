import React from "react";
import "../global.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(navInfo) => (navInfo.isActive ? "active" : "inActive")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={(navInfo) => (navInfo.isActive ? "active" : "inActive")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={(navInfo) => (navInfo.isActive ? "active" : "inActive")}
          >
            Contact
          </NavLink>

          <NavLink
            to="/services"
            className={(navInfo) => (navInfo.isActive ? "active" : "inActive")}
          >
            Service
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
