import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button, TextField } from "@mui/material";
import "../styles/Profile.css";

interface ProfileProps {
  user: {
    name: string;
    email: string;
    phone: string;
    cardNo: string;
    accNo: string;
  };
  setUser: (user: any) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
  const [profileData] = useState(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <Grid container spacing={3} className="profile-content">
        <Grid item xs={12}>
          <Typography variant="h4" className="profile-header">
            {profileData.name}'s Profile
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={profileData.email}
            InputProps={{ readOnly: true }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={profileData.phone}
            InputProps={{ readOnly: true }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Card No"
            variant="outlined"
            fullWidth
            value={profileData.cardNo}
            InputProps={{ readOnly: true }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Account No"
            variant="outlined"
            fullWidth
            value={profileData.accNo}
            InputProps={{ readOnly: true }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} className="logout-actions">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;