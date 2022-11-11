import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  };
  return (
    <div className="center">
      <div className="login">
        <h1>Login</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="text"
          placeholder="email.."
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          type="text"
          placeholder="password.."
        />
        <button onClick={submitHandler} className="sign">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
