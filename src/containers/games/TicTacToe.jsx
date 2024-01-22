import React, { useState, useEffect } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [namesEntered, setNamesEntered] = useState(true);

  useEffect(() => {
    if (!isXNext && !winner && namesEntered) {
      // Computer's move
      const computerMove = getComputerMove();
      setTimeout(() => handleClick(computerMove), 1000); // Introduce a delay to make it more visible
    }
  }, [isXNext, winner, namesEntered]);

  const handleClick = (index) => {
    if (winner || board[index] !== null || !namesEntered) {
      if (!namesEntered) {
        alert("Enter your names to start the game!");
      }
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard, index);
  };

  const checkWinner = (currentBoard, index) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        return;
      }
    }

    if (!currentBoard.includes(null)) {
      setWinner("Draw");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setNamesEntered(true);
  };

  const renderSquare = (index) => (
    <button className="board-cell" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const getComputerMove = () => {
    // Simple medium-level computer player logic
    // Randomly choose an empty cell for now
    const emptyCells = board.reduce((acc, cell, index) => {
      if (cell === null) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  };

  const status = winner
    ? winner === "Draw"
      ? "It's a Draw!"
      : `Player ${winner} Wins!`
    : namesEntered
    ? `Next player: ${isXNext ? "X" : "O"}`
    : "Game is ready!";

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe Game</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="board-cell">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <div className="reset-button">
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
