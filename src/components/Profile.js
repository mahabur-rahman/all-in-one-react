import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Profile page</h1>
      <h3>welcome {auth.user}</h3>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
