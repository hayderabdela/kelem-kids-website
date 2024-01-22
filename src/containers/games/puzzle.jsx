import React from "react";
import PuzzleCard from "./PuzzleCard";
import PuzzleDifficulty from "./PuzzleDiffuculty";
import "./Puzzle.css"; 

const Puzzle = () => {
  return (
    <div className="puzzle-container">
      <PuzzleDifficulty />
      <PuzzleCard />
    </div>
  );
};

export default Puzzle;
