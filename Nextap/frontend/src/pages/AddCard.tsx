import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Alert } from "@mui/material";
import "../styles/AddCard.css";

const AddCard: React.FC = () => {
  const [nfcId, setNfcId] = useState<string | null>(null);
  const [pin, setPin] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleNfcRead = async () => {
    // NFC reading logic (as shown earlier)
    try {
      if ("NDEFReader" in window) {
        const nfcReader = new (window as any).NDEFReader();
        await nfcReader.scan();
        nfcReader.onreading = (event: any) => {
          const message = event.message.records[0];
          if (message.recordType === "text") {
            const decoder = new TextDecoder();
            const nfcData = decoder.decode(message.data);
            setNfcId(nfcData);
            setSuccess("NFC Card detected successfully!");
            setError(null);
          } else {
            setError("Invalid NFC data");
            setSuccess(null);
          }
        };
      } else {
        setError("NFC not supported on this browser.");
        setSuccess(null);
      }
    } catch (err) {
      console.error("Error reading NFC card:", err);
      setError("Error reading NFC card. Please try again.");
      setSuccess(null);
    }
  };

  const handleAddCard = async () => {
    if (!nfcId || !pin) {
      setError("NFC ID and PIN are required.");
      setSuccess(null);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You are not logged in.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/add-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nfcId, pin }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Card added successfully!");
        setError(null);
        console.log("Updated cards:", data.cards);
      } else {
        setError(data.message || "Failed to add card.");
        setSuccess(null);
      }
    } catch (err) {
      console.error("Error adding card:", err);
      setError("Network error. Please try again.");
      setSuccess(null);
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPin = e.target.value;
    if (/^\d{0,4}$/.test(inputPin)) {
      setPin(inputPin); // Allow only up to 4 digits
    }
  };

  return (
    <div className="add-card-container">
      <Grid container spacing={3} className="add-card-content">
        <Grid item xs={12}>
          <Typography variant="h5" className="header-text">
            Add a New NFC Card
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNfcRead}
            className="nfc-button"
          >
            Tap NFC Card
          </Button>
        </Grid>
        {nfcId && (
          <Grid item xs={12}>
            <Typography variant="body1" className="nfc-id">
              NFC ID: {nfcId}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            label="Enter 4-Digit PIN"
            variant="outlined"
            fullWidth
            value={pin}
            onChange={handlePinChange}
            type="password"
            className="pin-field"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAddCard}
            className="add-card-button"
          >
            Add Card
          </Button>
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
        {success && (
          <Grid item xs={12}>
            <Alert severity="success">{success}</Alert>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default AddCard;