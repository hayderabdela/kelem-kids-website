import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./games.css";
import RockPaperScissors from "./RockPaperScissors";
import TicTacToe from "./TicTacToe";
import Puzzle from "./Puzzle";

const games = [
  {
    id: 1,
    title: "RockPaperScissors",
    cover: require("../../assets/rock-paper-scissor-card.webp"),
    component: RockPaperScissors,
  },
  {
    id: 2,
    title: "TicTacToe",
    cover: require("../../assets/xo-card.webp"),
    component: TicTacToe,
  },
  {
    id: 3,
    title: "Puzzle",
    cover: require("../../assets/puzzle-card.webp"),
    component: Puzzle,
  },
];

const GameStore = () => {
  // eslint-disable-next-line no-unused-vars
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
    <div className="game-container">
      <div className="game-hero">
        <h1>Welcome to the Kids Games</h1>
      </div>
      <div className="games-activity">
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
      <div className="games-list">
        {filteredGames.map((game) => (
          <div key={game.id} className="game-card">
            <h2>{game.title}</h2>
            <img src={game.cover} alt={game.title} className="game-cover" />
            <Link to={`/games/${game.title.replace(/\s+/g, "-")}`} className="game-link">
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStore;
