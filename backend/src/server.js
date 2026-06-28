// Import required packages
const express = require("express");
const cors = require("cors");

const potholeRoutes = require("./routes/potholeRoutes");

// Load environment variables
require("dotenv").config();

// Create the Express application
const app = express();

// Allow requests from other applications
app.use(cors());

// Automatically convert incoming JSON requests into JavaScript Objects
app.use(express.json());

app.use("/api/potholes", potholeRoutes);

// Test route to verify server is running
app.get("/", (req, res) => {
    res.send("Pothole API is running!");
});

// Use the port from the .env file, or default to 3000
const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});