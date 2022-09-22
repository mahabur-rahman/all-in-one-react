import React from "react";
import "./form.css";

const FormTwo = (props) => {
  return (
    <div className="formInput">
      {/* <label>username</label> */}
      <input
        placeholder={props.placeholder}
        onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
};

export default FormTwo;
