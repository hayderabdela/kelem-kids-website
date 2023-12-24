const Book = require("../models/Book");

// Controller to handle uploading a new book
const uploadBook = async (req, res) => {
  try {
    const { title, author, pdfPath } = req.body;
    const newBook = new Book({ title, author, pdfPath });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  uploadBook,
  getAllBooks,
};
