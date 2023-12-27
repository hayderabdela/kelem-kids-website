import React, { useState } from "react";
import "./TicTacToe.css";

// ... (your existing imports and code)

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [players, setPlayers] = useState({ X: '', O: '' });
  const [winner, setWinner] = useState(null);
  const [namesEntered, setNamesEntered] = useState(false);

  const handleClick = (index) => {
    if (winner || board[index] || !namesEntered) {
      if (!namesEntered) {
        alert('Enter your names to start the game!');
      }
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
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
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setNamesEntered(false);
    setPlayers({ X: '', O: '' }); // Clear player names
  };

  const renderSquare = (index) => (
    <button className="board-cell" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const handleNameChange = (player, e) => {
    if (player === 'X') {
      setPlayers({ ...players, X: e.target.value });
    } else {
      setPlayers({ ...players, O: e.target.value });
    }
    if (players.X && players.O) {
      setNamesEntered(true);
    }
  };

  const status = winner
    ? winner === 'Draw'
      ? 'It\'s a Draw!'
      : `Player ${players[winner]} Wins!`
    : namesEntered
    ? `Next player: ${players[isXNext ? 'X' : 'O']}`
    : 'Enter your names to start the game!';

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe Game</h1>
      <div className="status">{status}</div>
      <div className="player-input">
        <label>Name : </label>
        <input
          type="text"
          value={players.X}
          onChange={(e) => handleNameChange('X', e)}
          placeholder="Player 1"
        />
        <label>Name: </label>
        <input
          type="text"
          value={players.O}
          onChange={(e) => handleNameChange('O', e)}
          placeholder="Player 2"
        />
      </div>
      {namesEntered && (
        <div className="player-selection">
          <p>Select : </p>
          <button onClick={() => setIsXNext(true)} disabled={winner !== null}>
            X
          </button>
          <button onClick={() => setIsXNext(false)} disabled={winner !== null}>
            O
          </button>
        </div>
      )}
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

