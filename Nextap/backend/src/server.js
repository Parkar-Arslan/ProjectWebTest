// require("dotenv").config(); // Load environment variables
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const authRoutes = require("./routes/auth"); // Import authentication routes

// const app = express();
// const PORT = process.env.PORT || 3200; // Match the frontend's API URL port

// // Middleware
// app.use(cors()); // Enable CORS for cross-origin requests
// app.use(bodyParser.json()); // Parse JSON payloads

// // Routes
// app.use("/api/auth", authRoutes); // Use authentication routes

// // Root route for testing
// app.get("/", (req, res) => {
//   res.send("API is working!");
// });

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Start the server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

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