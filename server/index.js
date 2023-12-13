const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary= require("./cloudinary/cloudinary")
const auth = require('./routes/authRouter')
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log("DB not Connected...", err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', auth);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
