const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require('./routes/authRouter');
const bookRouter = require("./routes/bookRouter");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection for "users" database
mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Set server selection timeout
})
  .then(() => console.log("Users DB Connected..."))
  .catch((err) => {
    console.error("Users DB Connection Error:", err);
    process.exit(1); // Exit the application on connection error
  });

// MongoDB Connection for "booksDB" database
const booksDBConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/booksDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Set server selection timeout
});

booksDBConnection.on('connected', () => {
  console.log("Books DB Connected...");
});

booksDBConnection.on('error', (err) => {
  console.error("Books DB Connection Error:", err);
  process.exit(1); // Exit the application on connection error
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', auth);
app.use("/books", bookRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
