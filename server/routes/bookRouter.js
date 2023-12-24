const express = require("express");
const bookController = require("../controllers/BookController");

const router = express.Router();

// Route to handle book uploads
router.post("/upload", bookController.uploadBook);

// Route to get all books
router.get("/getAllBooks", bookController.getAllBooks);

module.exports = router;
