// BookStore.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./bookstore.css";

const books = [
  {
    id: 1,
    title: "The Magical Adventures",
    author: "Lily Meadows",
    cover: require("../../assets/story-1.jpg"),
    category: "story", // Corrected property name
  },
  {
    id: 2,
    title: "Language Fundamentals",
    author: "Celeste Moonlight",
    cover: require("../../assets/acadamic-2.jpg"),
    category: "academic", // Corrected property name
  },
  {
    id: 3,
    title: "The Holy Quran",
    author: "",
    cover: require("../../assets/book_11.jpg"),
    category: "religious", // Corrected property name
  },
  {
    id: 4,
    title: "The Kid With The Ball",
    author: "Anthony Curcio",
    cover: require("../../assets/book_18.jpg"),
    category: "sport", // Corrected property name
  },
  {
    id: 5,
    title: "Kids Science Book",
    author: "Lily Meadows",
    cover: require("../../assets/acadamic-5.jpg"),
    category: "academic", // Corrected property name
  },
  {
    id: 6,
    title: "Wonderful Stories for Kids",
    author: "Celeste Moonlight",
    cover: require("../../assets/story-4.jpg"),
    category: "story", // Corrected property name
  },
  {
    id: 7,
    title: "The Holy Bible",
    author: "",
    cover: require("../../assets/book_14.jpg"),
    category: "religious", // Corrected property name
  },
  {
    id: 8,
    title: "The Stars",
    author: "Ben Byde",
    cover: require("../../assets/book_17.jpg"),
    category: "sport", // Corrected property name
  },
  // Add more books as needed with different categories
];

const BookStore = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      (selectedCategory === "all" || book.category === selectedCategory) &&
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bookstore-container">
      {/* Hero section with background image */}
      <div className="hero">
        <h1>Welcome to the Kids Bookstore</h1>
        {/* Other content or elements in the hero section */}
      </div>

      {/* Content section below the hero */}
      <div className="books-activity">
        <div className="content">
          <div className="category-selector">
            <div className="category-buttons">
              {["all", "academic", "story", "sport", "religious"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryButtonClick(category)}
                    className={`category-button ${
                      selectedCategory === category ? "active" : ""
                    }`}
                  >
                    {category === "all"
                      ? "All Books"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="search-bar">
            <label>Search by Title:</label>
            <input
              type="text"
              placeholder="Enter title..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="books">
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <img src={book.cover} alt={book.title} className="book-cover" />
                <div className="book-details">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">By {book.author}</p>
                </div>
                <Link to={`/bookstore/${book.id}`} className="book-link">
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
