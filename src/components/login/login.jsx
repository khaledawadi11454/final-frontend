import React, { useState } from "react";
import "./login.css";
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("https://finalproject-app-api.onrender.com/user/login", {
      email: email,
      password: password,
    });
    console.log("loginnnn", resp);
    // Perform login logic here with email and password
    console.log("Login submitted");
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("https://finalproject-app-api.onrender.com/user/register", {
      name: name,
      email: email,
      password: password,
      role: role,
    });
    console.log(resp);
    // Perform sign-up logic here with name, email, password, and role
    console.log("Signup submitted");
    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
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
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select
            className="form-input"
            value={role}
            onChange={handleRoleChange}
            required
          >
            <option value="">Select a role</option>
            <option value="wordpress developer">WordPress Developer</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button className="form-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
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
  );
};

export default App;
