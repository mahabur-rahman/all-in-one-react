import React from "react";
import { NavLink } from "react-router-dom";
import "./toolbar.css";

const Toolbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;
