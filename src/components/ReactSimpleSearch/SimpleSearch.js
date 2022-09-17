import React, { useState } from "react";
import "./simple.css";
import MainData from "./Data.json";

function SimpleSearch() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Enter write something.."
          onChange={(e) => setInputValue(e.target.value)}
        />

        {MainData.filter((val) => {
          if (inputValue === "") {
            return val;
          } else if (
            val.first_name
              .toLocaleLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((item) => {
          return <pre key={item.id}>{item.first_name}</pre>;
        })}
      </div>
    </>
  );
}

export default SimpleSearch;
