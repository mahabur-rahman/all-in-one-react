import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";

const AutomaticPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }, []);

  return (
    <div>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      <h1>this is title</h1>
      {open && (
        <>
          <Modal />
        </>
      )}
    </div>
  );
};

export default AutomaticPopup;
