import React, { useState, useEffect } from 'react';
import './puzzle.css'; // Assuming you have a CSS file named 'puzzle.css'

const Puzzle = () => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    // Load your image
    const image = new Image();
    image.src = '../../assets/spongebob.jpg'; // Replace with the path to your image

    // Create canvas to divide the image into pieces
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // When the image is loaded
    image.onload = () => {
      const pieceWidth = image.width / 4; // Divide image into 4 pieces horizontally
      const pieceHeight = image.height / 4; // Divide image into 4 pieces vertically

      canvas.width = pieceWidth;
      canvas.height = pieceHeight;

      // Placeholder logic to divide the image into pieces
      const puzzlePieces = [];
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          ctx.drawImage(
            image,
            x * pieceWidth,
            y * pieceHeight,
            pieceWidth,
            pieceHeight,
            0,
            0,
            pieceWidth,
            pieceHeight
          );

          const dataUrl = canvas.toDataURL(); // Convert canvas to data URL
          puzzlePieces.push({ image: dataUrl, position: { x, y } });
        }
      }

      // Placeholder logic to shuffle the pieces
      const shuffledPieces = shuffleArray(puzzlePieces);

      setPieces(shuffledPieces);
    };
  }, []);

  // Function to shuffle array elements
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <div className="puzzle-container">
      {pieces.map((piece, index) => (
        <div key={index} className="puzzle-piece">
          <img src={piece.image} alt={`Piece ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Puzzle;
