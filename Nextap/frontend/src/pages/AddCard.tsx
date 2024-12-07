import React from "react";
import NavBar from "../components/NavBar";
import { Grid, TextField, Button, Typography } from "@mui/material";
import "../styles/AddCard.css";

const AddCard: React.FC = () => {
  return (
    <div className="add-card-container">
      <NavBar title="Add Card" loginLabel="Logout" />

      <Grid container spacing={3} className="add-card-content">
        <Grid item xs={12}>
          <Typography variant="h5" className="header-text">
            Add a New Card
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Card Number" variant="outlined" fullWidth className="input-field" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Cardholder Name" variant="outlined" fullWidth className="input-field" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Expiration Date (MM/YY)"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            className="input-field"
            type="password"
          />
        </Grid>
        <Grid item xs={12} className="action-buttons">
          <Button variant="contained" color="primary" className="add-card-button">
            Add Card
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCard;