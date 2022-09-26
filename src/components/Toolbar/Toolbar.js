import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";
import "./toolbar.css";

const Toolbar = () => {
  const auth = useAuth();

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
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>

          {!auth.user && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;
