import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./games.css";
import { Games } from "..";

const games = [
  {
    id: 1,
    title: "Rock-Paper-Scissor",
    cover: require("../../assets/rock-paper-scissor-card.webp"),
  },
  {
    id: 2,
    title: "tic-tac-toe",
    cover: require("../../assets/xo-card.webp"),
  },
  {
    id: 3,
    title: "Puzzle",
    cover: require("../../assets/puzzle-card.webp"),
  },
  // Add more books as needed with different categories
];
const GameStore = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGames = games.filter(
    (game) =>
      (selectedCategory === "all" || game.category === selectedCategory) &&
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Added 'return' here to render the JSX content
    <div className="game-container">
      {/* Hero section with background image */}
      <div className="game-hero">
        <h1>Welcome to the Kids Games</h1>
        {/* Other content or elements in the hero section */}
      </div>
      {/* Content section below the hero */}
      <div className="games-activity">
        {" "}
        {/* Corrected class name from 'books-activity' to 'games-activity' */}
        <div className="content">
          <div className="search-bar">
            <label>Search by Title:</label>
            <input
              type="text"
              placeholder="Enter title..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>
      {/* Display filtered games */}
      {/* <div className="games-list">
        {filteredGames.map((game) => (
          <div key={game.id}>
            <h2>{game.title}</h2>
            <img src={game.cover} alt={game.title} />
          </div>
        ))}
      </div> */}
      <div className="books">
            {filteredGames.map((game) => (
              <div key={game.id} className="game-card">
                <img src={game.cover} alt={game.title} className="game-cover" />
                <div className="game-details">
                  <h3 className="game-title">{game.title}</h3>
                </div>
                {/* <Link to={`/bookstore/${book.id}`} className="book-link">
                  Explore
                </Link> */}
              </div>
            ))}
          </div>

    </div>
  );
};

export default GameStore;
