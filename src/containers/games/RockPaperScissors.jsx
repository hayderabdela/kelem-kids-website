import React, { useState } from 'react';
import './RockPaperScissors.css';
import rockImage from '../../assets/rock.png';
import paperImage from '../../assets/paper.png';
import scissorsImage from '../../assets/scissor.png';

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['rock', 'paper', 'scissors'];

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a tie!";
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };

  const playGame = (choice) => {
    const computerChoice = generateComputerChoice();
    const winner = determineWinner(choice, computerChoice);
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(winner);
  };

  return (
    <div className="rps-game-container">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <img
            key={choice}
            src={choice === 'rock' ? rockImage : choice === 'paper' ? paperImage : scissorsImage}
            alt={choice}
            onClick={() => playGame(choice)}
          />
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="result">
          <p>You chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
