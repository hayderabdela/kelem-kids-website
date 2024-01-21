import React from "react";
import PuzzleCard from "./PuzzleCard";
import PuzzleDifficulty from "./PuzzleDiffuculty";

const Puzzle = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-blue-50 text-gray-600 min-h-screen">
      <PuzzleDifficulty />
      <PuzzleCard />
    </div>
  );
};

export default Puzzle;
