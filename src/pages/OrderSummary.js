import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>Order confirmed!</div>
      <button onClick={goBack}>Go back</button>
    </>
  );
};

export default OrderSummary;
