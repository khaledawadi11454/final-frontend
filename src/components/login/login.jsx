import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [data, setData] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://finalproject-app-api.onrender.com/user/login",
        // "http://localhost:5000/user/login",
        data
      );
      if (resp.status === 200 || resp.status > 200) {
        if (resp.data.message.role === "admin") {
          localStorage.setItem("token", JSON.stringify(resp.data.message));
          nav('/test5')
          window.location.reload()
        } else {
          localStorage.setItem("user", JSON.stringify(resp.data.message));
          nav('/')
          window.location.reload()
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form className="form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-input"
            type="email"
            onChange={handleChange}
            required
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-input"
            type="password"
            onChange={handleChange}
            name="password"
            required
          />
        </div>
        <button className="form-button" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

const SignupForm = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      // "Access-Control-Allow-Origin",
      "https://finalproject-app-api.onrender.com/user/register",
      // "http://localhost:5000/user/register",
      data
    );
    console.log(resp);
    console.log("Signup submitted");
    Swal.fire("Success", "You Have Registered Successfully", "success");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-input"
            type="text"
            onChange={handleChange}
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-input"
            name="email"
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-input"
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select
            className="form-input"
            onChange={handleChange}
            required
            name="role"
          >
            <option value="">Select a role</option>
            <option value="WordPress Developer">WordPress Developer</option>
            <option value="customer">Customer</option>
            <option value="freelancer">Freelancer</option>
          </select>
        </div>
        <button className="form-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <div className="login-form-container">
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabChange("login")}
          >
            Login
          </button>
          <button
            className={`tab-button ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => handleTabChange("signup")}
          >
            Sign Up
          </button>
        </div>
        {activeTab === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Login;
