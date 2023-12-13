// BookStore.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./bookstore.css";

const books = [
  {
    id: 1,
    title: "The Magical Adventures",
    author: "Lily Meadows",
    cover: require("../../assets/arrival_1.jpg"),
    ageGroup: "3-6",
  },
  {
    id: 2,
    title: "Wonderful Stories for Kids",
    author: "Celeste Moonlight",
    cover: require("../../assets/acadamic-2.jpg"),
    ageGroup: "7-10",
  },
    {
    id: 3,
    title: "The Magical Adventures",
    author: "Lily Meadows",
    cover: require("../../assets/story-1.jpg"),
    ageGroup: "3-6",
  },
  {
    id: 4,
    title: "The Dancing Stars",
    author: "Celeste Moonlight",
    cover: require("../../assets/story-2.jpg"),
    ageGroup: "7-10",
  },
  // Add more books as needed with different age groups
];

const BookStore = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all");

  const filteredBooks =
    selectedAgeGroup === "all"
      ? books
      : books.filter((book) => book.ageGroup === selectedAgeGroup);

  return (
    <div className="bookstore-container">
      <h2 className="bookstore-title">Welcome to the Kids Bookstore</h2>
      <div className="age-selector">
        <label htmlFor="ageGroup">Filter by Age Group:</label>
        <select
          id="ageGroup"
          onChange={(e) => setSelectedAgeGroup(e.target.value)}
        >
          <option value="all">All Ages</option>
          <option value="3-6">3-6 years</option>
          <option value="7-10">7-10 years</option>
          {/* Add more age groups as needed */}
        </select>
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
  );
};

export default BookStore;
