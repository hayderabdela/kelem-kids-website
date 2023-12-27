import React, { useState } from 'react';

const INITIAL_BOARD = Array(9).fill(null);

const XOGame = () => {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [isXNext, setIsXNext] = useState(true);

  const handleCellPress = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderCell = (index) => (
    <button
      className="cell"
      onClick={() => handleCellPress(index)}
      disabled={board[index] || calculateWinner(board)}
    >
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);

  return (
    <div className="container">
      <h2 className="header">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </h2>
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default XOGame;
