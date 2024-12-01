import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import "../styles/Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", email, password);
    // Here you would send the login data to your backend API
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
          <Button variant="contained" color="primary" onClick={handleLogin} className="login-button">
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;