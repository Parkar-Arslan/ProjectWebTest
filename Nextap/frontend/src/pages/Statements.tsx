import React from "react";
import NavBar from "../components/NavBar";
import { Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import "../styles/Statements.css";

const Statements: React.FC = () => {
  return (
    <div className="statements-container">
      <NavBar title="Statements" loginLabel="Logout" />

      <Grid container spacing={3} className="statements-content">
        <Grid item xs={12}>
          <Typography variant="h5" className="header-text">
            Recent Transactions
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Transaction 1" secondary="Date: 01/12/2024 | Amount: $100" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Transaction 2" secondary="Date: 30/11/2024 | Amount: $200" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Transaction 3" secondary="Date: 29/11/2024 | Amount: $50" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Statements;