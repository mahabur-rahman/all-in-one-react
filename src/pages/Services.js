import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Service page</h1>
      <button onClick={() => navigate("/contact")}>go to contact page</button>
    </div>
  );
};

export default Services;
