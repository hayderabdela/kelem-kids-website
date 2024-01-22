import React from "react";
import { Link } from "react-router-dom";
import "./games.css";
import RockPaperScissors from "./RockPaperScissors";
import TicTacToe from "./TicTacToe";
import Puzzle from "./PuzzleGallery";

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
  return (
    <div className="game-container">
      <div className="game-hero">
        <div className="game-intro">
          <h1>Welcome to the Kids Games</h1>
          <p>
            Step into the enchanting realm of Kids Games, where laughter and joy
            are the main characters. Our world is a playground of delightful
            adventures, sparking imagination and fostering endless smiles.
          </p>
        </div>
      </div>
      <div className="games-list">
        {games.map((game) => (
          <Link
            key={game.id}
            to={`/games/${game.title.replace(/\s+/g, "-")}`}
            className="game-card-link"
          >
            <div className="game-card">
              <h2>{game.title}</h2>
              <img src={game.cover} alt={game.title} className="game-cover" />
              <button className="game-link">Explore</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameStore;
