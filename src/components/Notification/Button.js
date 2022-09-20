import React from "react";
import { Store } from "react-notifications-component";

const Button = () => {
  const handleNotification = () => {
    Store.addNotification({
      title: "Wonderful!",
      message: "teodosii@react-notifications-component",
      type: "danger",
      insert: "top",
      container: "top-right",
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  };

  return <button onClick={handleNotification}>Default</button>;
};

export default Button;
