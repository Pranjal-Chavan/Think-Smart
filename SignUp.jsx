import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signup(formData);

      if (res.success) {
        alert(res.msg);
        navigate("/"); // Redirect to Home
      } else {
        setError(res.msg);
      }
    } catch (err) {
      console.error(err);
      setError("Signup failed. Try again later.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

export default Signup;
