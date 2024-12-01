import React from "react";
import NavBar from "../components/NavBar";
import { Grid, TextField, Button } from "@mui/material";
import "../styles/SendReceive.css";

const SendReceive: React.FC = () => {
  return (
    <div className="send-receive-container">
      <NavBar title="Send & Receive" loginLabel="Logout" />

      <Grid container spacing={3} className="send-receive-content">
        <Grid item xs={12}>
          <TextField label="Recipient Address" variant="outlined" fullWidth className="input-field" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Amount" variant="outlined" fullWidth className="input-field" />
        </Grid>
        <Grid item xs={12} className="action-buttons">
          <Button variant="contained" color="primary" className="send-button">
            Send
          </Button>
          <Button variant="outlined" color="secondary" className="receive-button">
            Receive
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SendReceive;