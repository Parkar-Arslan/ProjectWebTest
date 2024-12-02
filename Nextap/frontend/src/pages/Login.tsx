import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@mui/material";
import "../styles/Login.css";

interface LoginProps {
  setUser: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3200";

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Login failed:", data);
        alert(data.message || "Login failed. Please try again.");
        return;
      }

      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } catch (error) {
      console.error("Network error during login:", error);
      alert("An error occurred during login. Please check your connection and try again.");
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