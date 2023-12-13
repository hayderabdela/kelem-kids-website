// BookDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";
import "./bookdetail.css";

// Assuming 'books' is defined in the same file or available globally
const books = [
  {
    id: 1,
    title: "The Magical Adventures",
    author: "Lily Meadows",
    cover: require("../../assets/arrival_1.jpg"),
    ageGroup: "3-6",
    description: "In a whimsical world of wonder, a little bunny named Cotton discovered a hidden portal behind a rainbow. Through it, she entered a land filled with talking flowers, flying unicorns, and playful fairies. With Sparkle, a unicorn, by her side, Cotton explored cotton candy clouds, enchanted forests, and discovered hidden waterfalls. Guided by Oliver, the wise old owl, they solved riddles and danced under the moonlit sky. Each day brought new surprises—glowing fireflies, secret picnics, and talking caterpillars. Together, they taught the importance of friendship and harmony to all the enchanted creatures. As the sun set on their final adventure, Cotton hopped back through the rainbow portal, cherishing the magical memories in her heart.",
  },
  {
    id: 2,
    title: "The Dancing Stars",
    author: "Celeste Moonlight",
    cover: require("../../assets/acadamic-2.jpg"),
    ageGroup: "7-10",
    description: "In the charming village of Stardust Haven, a magical event unfolded every night. As the sun dipped below the horizon, stars emerged from the sky, transforming into lively dancers. Led by the twinkling North Star, they waltzed and pirouetted, creating a celestial ballet that enchanted all who witnessed it. Among the fascinated spectators was a little girl named Luna. Every evening, she joined the cosmic dance, her laughter blending with the shimmering melody. In Stardust Haven, where dreams took flight and laughter echoed through the night, the Dancing Stars became a cherished tale, inspiring wonder and joy in the hearts of children.",
  },

    {
    id: 3,
    title: "The Magical Adventures",
    author: "Lily Meadows",
    cover: require("../../assets/story-2.jpg"),
    ageGroup: "3-6",
    description: "In a whimsical world of wonder, a little bunny named Cotton discovered a hidden portal behind a rainbow. Through it, she entered a land filled with talking flowers, flying unicorns, and playful fairies. With Sparkle, a unicorn, by her side, Cotton explored cotton candy clouds, enchanted forests, and discovered hidden waterfalls. Guided by Oliver, the wise old owl, they solved riddles and danced under the moonlit sky. Each day brought new surprises—glowing fireflies, secret picnics, and talking caterpillars. Together, they taught the importance of friendship and harmony to all the enchanted creatures. As the sun set on their final adventure, Cotton hopped back through the rainbow portal, cherishing the magical memories in her heart.",
  },
  {
    id: 4,
    title: "The Dancing Stars",
    author: "Celeste Moonlight",
    cover: require("../../assets/story-1.jpg"),
    ageGroup: "7-10",
    description: "In the charming village of Stardust Haven, a magical event unfolded every night. As the sun dipped below the horizon, stars emerged from the sky, transforming into lively dancers. Led by the twinkling North Star, they waltzed and pirouetted, creating a celestial ballet that enchanted all who witnessed it. Among the fascinated spectators was a little girl named Luna. Every evening, she joined the cosmic dance, her laughter blending with the shimmering melody. In Stardust Haven, where dreams took flight and laughter echoed through the night, the Dancing Stars became a cherished tale, inspiring wonder and joy in the hearts of children.",
  },
  // Add more books as needed with different age groups
];

const BookDetails = () => {
  const { bookId } = useParams();
  console.log("bookId:", bookId);

  const selectedBook = books.find((book) => book.id === parseInt(bookId));
  console.log("selectedBook:", selectedBook);

  if (!selectedBook) {
    console.log("Books:", books); // Add this line to see all available books in the console.
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details-page">
      <img
        src={selectedBook.cover}
        alt={selectedBook.title}
        className="book-details-cover"
      />
      <div className="book-details-content">
        <h2 className="book-details-title">{selectedBook.title}</h2>
        <p className="book-details-author">By {selectedBook.author}</p>
        <p className="book-details-description">{selectedBook.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
