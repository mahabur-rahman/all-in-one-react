import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <h1>Product page</h1>
      <input type="text" placeholder="products.." />
      <br />
      <Link to="featured" style={{ fontSize: "1.5rem" }}>
        Featured
      </Link>
      <Link to="new" style={{ fontSize: "1.5rem", marginLeft: ".5rem" }}>
        New
      </Link>

      <Outlet />
    </>
  );
};

export default Product;
