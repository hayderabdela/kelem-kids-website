// ProgramSection.jsx

import React from 'react';
import './programsection.css';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 1,
    title: 'Games 🎮',
    // description: 'Dive into a world of interactive fun!',
    link: '/games',
    color: '#FF69B4', // Pink
  },
  {
    id: 2,
    title: 'Books 📚',
    // description: 'Spark curiosity with our collection of educational books.',
    link: '/bookstore',
    color: '#87CEEB', // Sky Blue
  },
    {
    id: 3,
    title: 'Videos 📹',
    // description: 'Spark curiosity with our collection of educational videos .',
    link: '/videostore',
    color: '#966df7', // Sky Blue
  },
  {
    id: 4,
    title: 'Vocab 🗣️',
    // description: "Expand your child's language skills with our vocabulary lessons.",
    link: '/vocabulary',
    color: '#fcfc03', // Gold
  },
  {
    id: 5,
    title: 'Facts 🧠',
    // description: 'Explore the wonders of the world with our fascinating facts.',
    link: '/facts',
    color: '#e371f5', // Tomato Red
  },
];
const handle = (title) => {
  console.log("clicked",title);
}
const ProgramSection = () => {
  return (
    <section className="info-section ">
      <div className="information">
        <div className="info-title">
          <h2>Our Programs</h2>
        </div>
        <div className="info-container">
          {programs.map((program) => (
            <div key={program.id} className="card-container" style={{ backgroundColor: program.color }}
            onClick={handle(program.title)}>
              <Link to={program.link} className='card'>
                {program.title}
                <p>{program.description}</p>

              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
