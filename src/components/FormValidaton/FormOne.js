import { useState } from "react";
import "./form.css";

const FormOne = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (fname.length === 0 || lname.length === 0) {
      setError(true);
    } else {
      console.log("fname : ", fname, "last name : ", lname);
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        {error && fname.length <= 0 ? (
          <label>First Name can't be Empty</label>
        ) : (
          ""
        )}
        <div>
          <input
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        {error && lname.length <= 0 ? (
          <label>Last Name can't be Empty</label>
        ) : (
          ""
        )}
        <button className="btn" onClick={handleClick}>
          Submit
        </button>
      </div>
    </>
  );
};

export default FormOne;
