import React, { useState } from "react";
import "../admin/Admin.css";
import Usernav from "../navbar/Usernav"
import Footer from "../footer/Footer";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);
      const response = await axios.post(
        "http://localhost:3001/admin/adminlogin",
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/display");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Usernav />
      <div className="con">
        <h1>ADMIN LOGIN</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="email">
            <label htmlFor="email">Admin Id</label>
            <input
              type="text"
              placeholder="ADMIN NAME"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="animated-border"></span>
          </div>
          <div className="email">
            <label htmlFor="password">PASSWORD</label>
            <input
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="animated-border"></span>
          </div>
          <div className="password">
            <span className="animated-border"> </span>
          </div>
          <div className="button">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
