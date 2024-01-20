// KidFriendlyFacts.jsx
import React, { useState, useEffect } from 'react';
import './facts.css';

// KidFriendlyFacts.jsx
const factsList = [
  {
    category: 'Fun Fact',
    facts: [
      'There are 31,557,600 seconds in a year.',
      'Tomatoes and avocados are actually fruits, not vegetables.',
      'A bolt of lightning is five times hotter than the sun.',
      'The opposite sides of the dice always add up to seven.',
      'Number four is the only one with the same amount of letters.',
      'Apples float on water!'
      // Add more fun facts
    ],
    image: 'fun-fact.jpg',
  },
  {
    category: 'Animal Fact',
    facts: [
      'A dog nose is like a human fingerprint unique to its owner.',
      'Kangaroos can not walk backward.',
      'An ostrich eye is bigger than its whole brain.',
      'Pigs can not look up into the sky - it is physically impossible.',
      'There are more than 1,000 kinds of bats in the world.',
      'Horses and cows sleep standing up.',
      'Cats have over 28 muscles in each ear.',
      'Octopuses have three hearts.'
      // Add more animal facts
    ],
    image: 'animal-fact.jpg',
  },
  {
    category: 'Space Fact',
    facts: [
      'Mars is named after the Roman god of war because of its red colour.',
      'The sun looks super close but it would take 70,000 years in our fastest spaceship to reach it.',
      'Water covers 70% of Earth.',
      'Evidence shows that ancient Mars had rivers, lakes and maybe even oceans of liquid water.',
      'The sunset on Mars appears blue.',
      'Mars has two tiny moons called Phobos and Deimos.',
      'Mars has the largest volcanoes and canyons in the entire solar system.'
      // Add more space facts
    ],
    image: 'space-fact.jpg',
  },
    {
    category: 'Football Fact',
    facts: [
      'The longest goal ever scored was from over 82 metres away by Asamoah Gyan of Sunderland in 2013.',
      'The fastest goal in World Cup history was scored by Hakan Sukur of Turkey after just 10.8 seconds in 2002.',
      'The England v Scotland football match in 1872 was the world first international match.',
      'The world oldest football player was an Egyptian called Ezzeldin Bahader who played at age 75 in 2020.'
      // Add more space facts
    ],
    image: 'Football-fact.jpg',
  },
      {
    category: 'Geography Fact',
    facts: [
      'There may have been four different Ice Ages, where the world was completely covered in ice, not just one.',
      'The tallest building in the world is the Burj Khalifa in Dubai, which is 828 metres tall with 163 floors.',
      'The smallest country in the world is the Vatican City in Rome, Italy. It is only about 109 acres.',
      // Add more space facts
    ],
    image: '../../assets/bg1.png',
  }, 
];


// KidFriendlyFacts.jsx
const Facts = () => {
  const [currentFact, setCurrentFact] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const getAllFacts = () => factsList.flatMap(category => category.facts || []);

  const getFilteredFacts = () => {
    return selectedCategory === 'All'
      ? getAllFacts()
      : factsList.find(fact => fact.category === selectedCategory)?.facts || [];
  };

  const generateRandomFact = () => {
    setLoading(true);
    setTimeout(() => {
      const filteredFacts = getFilteredFacts();
      const randomIndex = Math.floor(Math.random() * filteredFacts.length);
      setCurrentFact(filteredFacts[randomIndex]);
      setLoading(false);
    }, 1000); // Simulating a delay for loading effect
  };

  useEffect(() => {
    generateRandomFact();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="kid-friendly-facts-container">
      <h2>Kid-Friendly Facts</h2>
      <label htmlFor="category">Select Category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Fun Fact">Fun Fact</option>
        <option value="Animal Fact">Animal Fact</option>
        <option value="Space Fact">Space Fact</option>
        <option value="Geography Fact">Geography Fact</option>
        <option value="Football Fact">Football Fact</option>
      </select>
      {loading ? (
        <p>Loading...</p>
      ) : (
        currentFact && (
          <div>
            <h3>{currentFact.category}</h3>
            {Array.isArray(currentFact) ? (
              currentFact.map((fact, index) => (
                <p key={index}>{fact}</p>
              ))
            ) : (
              <p>{currentFact}</p>
            )}
          </div>
        )
      )}
      <button className="generate-button" onClick={generateRandomFact}>
        {loading ? 'Generating...' : 'Generate Fact'}
      </button>
    </div>
  );
};

export default Facts;
