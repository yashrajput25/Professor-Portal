
// ################################################### LOGIN PAGE #######################################################

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"; // Import the CSS file
import CourseCreation from "./CourseCreation/CourseCreation";


export default function Login({setAuth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });
      // localStorage.setItem("token", res.data.token); //saving the token// -> Commented by Nimish

      //Changes made by Nimish 
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", email);


      setMessage("✅ Login successful!");
      if(setAuth){
        setAuth(false);
      }
      navigate("/dashboard");
    
    } catch (err) {
      setMessage("❌ Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
