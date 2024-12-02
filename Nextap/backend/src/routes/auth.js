const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); // To generate unique NFC IDs

const JWT_SECRET = process.env.JWT_SECRET;

// Register User
router.post("/register", async (req, res) => {
  const { email, password, name, phone, cardNo, accNo } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ email, password, name, phone, cardNo, accNo });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error during user registration:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Profile Route (Get Profile)
router.get("/profile", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(401).json({ message: "Invalid token" });
  }
});

// Update Profile
router.put("/profile", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { name, email, phone, cardNo, accNo } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      decoded.id,
      { name, email, phone, cardNo, accNo },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Add NFC Card
router.post("/add-card", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { rawNfcData, pin } = req.body;

    if (!rawNfcData || !pin) {
      return res.status(400).json({ message: "Raw NFC data and PIN are required" });
    }

    // Generate a unique NFC ID from the raw NFC data
    const nfcId = crypto.createHash("sha256").update(rawNfcData).digest("hex");

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the NFC card is already added
    const existingCard = user.cards.find(card => card.nfcId === nfcId);
    if (existingCard) {
      return res.status(400).json({ message: "NFC card is already added" });
    }

    // Add card details to the user's data
    user.cards.push({ nfcId, pin });
    await user.save();

    res.status(200).json({ message: "Card added successfully", cards: user.cards });
  } catch (err) {
    console.error("Error adding card:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;