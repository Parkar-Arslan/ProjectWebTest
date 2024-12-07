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
  const [profileData, setProfileData] = useState(user); // Editable profile data
  const [isEditing, setIsEditing] = useState(false); // Edit mode toggle
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not authorized!");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || "https://backend-sand-xi.vercel.app"}/api/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data); // Update user state
        setIsEditing(false); // Exit edit mode
        alert("Profile updated successfully!");
      } else {
        console.error("Error updating profile:", data);
        alert(data.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Network error while updating profile:", error);
      alert("A network error occurred. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value, // Update the corresponding field
    });
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
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={profileData.name}
            onChange={handleChange}
            InputProps={{ readOnly: !isEditing }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={profileData.email}
            onChange={handleChange}
            InputProps={{ readOnly: !isEditing }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            value={profileData.phone}
            onChange={handleChange}
            InputProps={{ readOnly: !isEditing }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="cardNo"
            label="Card No"
            variant="outlined"
            fullWidth
            value={profileData.cardNo}
            onChange={handleChange}
            InputProps={{ readOnly: !isEditing }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="accNo"
            label="Account No"
            variant="outlined"
            fullWidth
            value={profileData.accNo}
            onChange={handleChange}
            InputProps={{ readOnly: !isEditing }}
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} className="profile-actions">
          {isEditing ? (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                className="save-button"
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setIsEditing(false)}
                className="cancel-button"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(true)}
              className="edit-button"
            >
              Edit Profile
            </Button>
          )}
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