import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./data";
import * as Icons from "react-icons/fa";
import "./navbar.css";
import SignUp from "./SignUp";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* topbar  */}
      <nav className="navbar">
        <Link className="navbar-logo" onClick={() => setSidebar(false)}>
          <Icons.FaPiedPiper />
          PIPER
        </Link>

        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    <span className="icon"> {item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* signUp btn  */}
        {!mobile && <SignUp />}
        {/* icon change with condition */}
        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      {/* sidebar here  */}

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li key={item.id} className={item.sName}>
                <Link to={item.path}>
                  <span className="icons">{item.icon}</span>
                  <span> {item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
