import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button, TextField } from "@mui/material";
import "../styles/Profile.css";

interface ProfileProps {
  user: any;
  setUser: (user: any) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
  const [profileData, setProfileData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const apiUrl = process.env.REACT_APP_API_URL || "https://backend-sand-xi.vercel.app";
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        console.log("Fetching profile data...");
        const response = await fetch(`${apiUrl}/api/auth/profile`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Response status:", response.status);

        const data = await response.json();

        if (response.ok) {
          console.log("Profile data fetched successfully:", data);
          setProfileData(data);
        } else {
          console.error("Failed to fetch profile data:", data);
          navigate("/login");
        }
      } catch (error) {
        console.error("Network error while fetching profile:", error);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  if (!profileData) {
    return (
      <div className="profile-container">
        <Typography variant="h6" className="loading-text">
          Loading profile...
        </Typography>
      </div>
    );
  }

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