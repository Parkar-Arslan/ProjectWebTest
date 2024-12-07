import React from "react";
import NavBar from "../components/NavBar";
import { Grid, Typography } from "@mui/material";
import "../styles/Balance.css";

const Balance: React.FC = () => {
  return (
    <div className="balance-container">
      <NavBar title="Balance" loginLabel="Logout" />

      <Grid container spacing={3} className="balance-content">
        <Grid item xs={12} className="balance-header">
          <Typography variant="h4" className="balance-amount">
            Your Balance: $500.00
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Balance;