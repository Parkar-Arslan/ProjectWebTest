import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@mui/material";
import "../styles/Login.css";

interface LoginProps {
  setUser: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [email, setEmail] = useState(""); // Email input state
  const [password, setPassword] = useState(""); // Password input state
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://backend-sand-xi.vercel.app";
      console.log("API URL:", apiUrl); // Debug: Ensure API URL is correct

      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response status:", response.status); // Debug: Log response status

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data); // Debug: Log success response
        localStorage.setItem("token", data.token); // Store token in localStorage
        setUser(data.user); // Update user state
        alert("Login successful!"); // Notify the user
        navigate("/"); // Redirect to the home page
      } else {
        console.error("Login failed:", data); // Debug: Log error response
        alert(data.message || "Login failed. Please check your credentials."); // Notify the user of an error
      }
    } catch (error) {
      console.error("Network error during login:", error); // Debug: Log network error
      alert("A network error occurred. Please check your connection and try again."); // Notify the user of a network error
    }
  };

  return (
    <div className="login-container">
      <Grid container spacing={3} className="login-content">
        <Grid item xs={12}>
          <Typography variant="h4" className="login-header">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} className="login-actions">
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className="login-button"
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;