import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./signUpBtn.css";

function SignUp() {
  return (
    <>
      <Link className="sign_up_btn">
        <button className="btn">
          <Icons.FaUserPlus />
          <span>SignUp</span>
        </button>
      </Link>
    </>
  );
}

export default SignUp;
