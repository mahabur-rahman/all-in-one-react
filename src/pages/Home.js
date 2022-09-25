import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => navigate("/order-summary", { replace: true })}>
        Place order
      </button>
    </>
  );
};

export default Home;
