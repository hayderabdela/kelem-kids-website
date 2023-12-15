const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require('cloudinary').v2;
const auth = require('./routes/authRouter')
const cloudinaryRouter = require('./routes/cloudinaryRouter')
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
// Cloudinary Configuration
// cloudinary.config({
//   cloud_name: 'dql9jy5wl',
//   api_key: '196365693146448',
//   api_secret: 'yEk7IlaYNQ8gYMhENp-d4b02MEM',
// });
// Routes
app.use('/auth', auth);
// Cloudinary Configuration
app.use('/cloudinary', cloudinaryRouter); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
