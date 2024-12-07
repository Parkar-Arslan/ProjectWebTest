import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";
import "../styles/AddCard.css";

const AddCard: React.FC = () => {
  const [nfcSupported, setNfcSupported] = useState(true); // Detect NFC support
  const [rawNfcData, setRawNfcData] = useState(""); // NFC data input
  const [nuId, setNuId] = useState(""); // Barcode/NU ID input
  const [pin, setPin] = useState(""); // PIN input

  const handleAddCard = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://backend-sand-xi.vercel.app";
      const response = await fetch(`${apiUrl}/api/auth/add-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          rawNfcData: nfcSupported ? rawNfcData : undefined,
          nuId: !nfcSupported ? nuId : undefined,
          pin,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Card added successfully!");
        console.log("Card data:", data);
      } else {
        console.error("Error adding card:", data);
        alert(data.message || "Failed to add card.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("A network error occurred. Please try again.");
    }
  };

  return (
    <div className="add-card-container">
      <Typography variant="h4" className="header-text">
        Add a Card
      </Typography>
      <Grid container spacing={3}>
        {nfcSupported ? (
          <Grid item xs={12}>
            <TextField
              label="NFC Data"
              variant="outlined"
              fullWidth
              value={rawNfcData}
              onChange={(e) => setRawNfcData(e.target.value)}
              className="input-field"
              helperText="Tap your NFC card or manually enter NFC data"
            />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <TextField
              label="NU ID (Barcode)"
              variant="outlined"
              fullWidth
              value={nuId}
              onChange={(e) => setNuId(e.target.value)}
              className="input-field"
              helperText="Scan the barcode or manually enter NU ID"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            label="PIN"
            type="password"
            variant="outlined"
            fullWidth
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="input-field"
            helperText="Enter a 4-digit PIN for security"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCard}
            className="add-card-button"
          >
            Add Card
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="text"
            onClick={() => setNfcSupported(!nfcSupported)}
            className="toggle-button"
          >
            {nfcSupported ? "Switch to Barcode" : "Switch to NFC"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCard;