import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@mui/material";
import "../styles/Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router's navigation hook

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3200/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Store token in localStorage
        navigate("/"); // Redirect to Home page
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
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