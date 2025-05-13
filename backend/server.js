require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
// const port = 5000;
const port = 5001;


// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Import routes for logging in and registering
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


// Import routes course creation using excel
const excelRoutes = require("./routes/excelRoutes");
app.use("/api", excelRoutes);

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
