import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Grid container spacing={3} className="home-content">
        <Grid item xs={12} className="welcome-text">
          <Typography variant="h3" className="welcome-header">
            Welcome to Nextap!
          </Typography>
          <Typography variant="body1" className="welcome-description">
            Your one-stop solution for seamless digital transactions using NFC and QR codes.
          </Typography>
          <Button variant="contained" color="primary" className="get-started-button">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;