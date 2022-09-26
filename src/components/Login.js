import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const auth = useAuth();

  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };

  return (
    <div>
      <label>
        Username :
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </label>
    </div>
  );
};

export default Login;
