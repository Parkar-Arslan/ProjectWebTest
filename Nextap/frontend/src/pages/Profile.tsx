import React from "react";
import NavBar from "../components/NavBar";
import { Grid, TextField, Avatar, Button, Typography } from "@mui/material";
import "../styles/Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <NavBar title="Profile" loginLabel="Logout" />

      <Grid container spacing={3} className="profile-content">
        {/* Profile Photo Section */}
        <Grid item xs={12} className="profile-photo-section">
          <Avatar className="profile-photo" />
          <Typography variant="h5" className="profile-name">
            John Doe
          </Typography>
        </Grid>

        {/* Profile Fields */}
        <Grid item xs={12} sm={6} className="profile-item">
          <TextField
            label="Profile ID"
            variant="outlined"
            fullWidth
            disabled
            defaultValue="123456"
            InputLabelProps={{ className: "text-label" }}
            InputProps={{ className: "text-input" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="profile-item">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            defaultValue="John Doe"
            InputLabelProps={{ className: "text-label" }}
            InputProps={{ className: "text-input" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="profile-item">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            defaultValue="johndoe@example.com"
            InputLabelProps={{ className: "text-label" }}
            InputProps={{ className: "text-input" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="profile-item">
          <TextField
            label="Phone No"
            variant="outlined"
            fullWidth
            defaultValue="+123456789"
            InputLabelProps={{ className: "text-label" }}
            InputProps={{ className: "text-input" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="profile-item">
          <TextField
            label="Card No"
            variant="outlined"
            fullWidth
            defaultValue="1234 5678 9012"
            InputLabelProps={{ className: "text-label" }}
            InputProps={{ className: "text-input" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="profile-item">
          <TextField
            label="Acc No"
            variant="outlined"
            fullWidth
            defaultValue="000123456789"
            InputLabelProps={{ className: "text-label" }}
            InputProps={{ className: "text-input" }}
          />
        </Grid>

        {/* Save/Update Buttons */}
        <Grid item xs={12} className="profile-actions">
          <Button variant="contained" color="primary" className="save-button">
            Save
          </Button>
          <Button variant="outlined" color="secondary" className="update-button">
            Update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;