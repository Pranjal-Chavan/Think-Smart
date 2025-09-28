import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Backend URL

// Signup
export const signup = async (data) => {
  const res = await axios.post(`${API_URL}/register`, data);
  return res.data;
};

// Login
export const login = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data);
  if (res.data.success) {
    // Save user session in localStorage
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// Check if user is logged in
export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};

// Logout
export const logout = () => {
  localStorage.removeItem("user");
};
