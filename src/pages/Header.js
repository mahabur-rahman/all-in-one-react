import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/services">Service</NavLink>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Header;
