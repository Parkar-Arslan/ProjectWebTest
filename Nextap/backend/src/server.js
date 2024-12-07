require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();


// Middleware
app.use(cors({
  origin: "https://frontend-phi-topaz-44.vercel.app", // Allow your frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(bodyParser.json()); // Parse JSON payloads

// Routes
app.use("/api/auth", authRoutes);

// Root route for testing
app.get("/", (req, res) => {
  res.send("API is working on Vercel!");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));



// Export the app for Vercel
module.exports = app;