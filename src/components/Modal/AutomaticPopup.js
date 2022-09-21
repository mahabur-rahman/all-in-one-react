import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AutomaticPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  return (
    <div open={open}>
      {open && (
        <>
          <h1>title</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            enim autem molestias, aliquid iure quos! Cum, porro. Perferendis,
            minus! Illum.
          </p>
        </>
      )}
    </div>
  );
};

export default AutomaticPopup;
