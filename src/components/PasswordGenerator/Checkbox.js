import React from "react";

const Checkbox = ({ value, onChange }) => {
  return (
    <div>
      <input type="checkbox" checked={value} onChange={onChange} />
    </div>
  );
};

export default Checkbox;
