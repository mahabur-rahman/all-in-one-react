import React from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Button from "./Button";

const Notification = () => {
  return (
    <div>
      <h1>React Notification</h1>
      <ReactNotifications />
      <Button />
    </div>
  );
};

export default Notification;
