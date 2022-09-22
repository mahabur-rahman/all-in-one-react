import React from "react";
import "./form.css";

const FormTwo = (props) => {
  console.log("form two : ", props.value);
  return (
    <div className="formInput">
      {/* <label>username</label> */}
      <input placeholder={props.placeholder} name={props.name} />
    </div>
  );
};

export default FormTwo;
