import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/Authcontext";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
