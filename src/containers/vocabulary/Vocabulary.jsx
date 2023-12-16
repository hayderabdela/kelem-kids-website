// vocabulary.js
import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import VocabularyList from './components/VocabularyList';
import './vocabulary.css';

const Vocabulary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Animals', 'Transportation', 'Fruits'];
  const vocabularyData = {
    All: [
      { name: 'kiwi', image: 'images/fruits/kiwi.jpg', audio: 'images/fruits/kiwi.mp3' },
      { name: 'dolfin', image: 'images/animals/dolfin.jpg', audio: 'images/animals/dolfine.mp3' },
      { name: 'airplane', image: 'images/transportation/airplane.jpg', audio: 'images/transportation/airplane.mp3' },
      { name: 'koala', image: 'images/animals/koala.jpg', audio: 'images/animals/koala.mp3' },
      { name: 'monkey', image: 'images/animals/monkey.jpg', audio: 'images/animals/monkey.mp3' },
      { name: 'ship', image: 'images/transportation/ship.jpg', audio: 'images/transportation/ship.mp3' },
      { name: 'watermelon', image: 'images/fruits/watermelon.jpg', audio: 'images/fruits/watermelon.mp3' },
      { name: 'pineapple', image: 'images/fruits/pineapple.jpg', audio: 'images/fruits/pineapple.mp3' },
      { name: 'lion', image: 'images/animals/lion.jpg', audio: 'images/animals/lion.mp3' },
      { name: 'giraffe', image: 'images/animals/giraffe.jpg', audio: 'images/animals/giraffe.mp3' },
      { name: 'bicycle',image: 'images/transportation/bicycle.jpg', audio: 'images/transportation/bicycle.mp3' },
      { name: 'bus', image: 'images/transportation/bus.jpg', audio: 'images/transportation/bus.mp3' },
      { name: 'penguine', image: 'images/animals/penguine.jpg', audio: 'images/animals/penguine.mp3' },
      { name: 'car', image: 'images/transportation/car.jpg', audio: 'images/transportation/car.mp3' },
      { name: 'helicopter', image: 'images/transportation/helicopter.jpg', audio: 'images/transportation/helicopter.mp3' },
      
      // Add more words with image and audio properties
    ],
    Animals: [
      { name: 'lion', image: 'images/animals/lion.jpg', audio: 'images/animals/lion.mp3' },
      { name: 'dolfin', image: 'images/animals/dolfin.jpg', audio: 'images/animals/dolfin.mp3' },
      { name: 'giraffe', image: 'images/animals/giraffe.jpg', audio: 'images/animals/girrafe.mp3' },
      { name: 'koala', image: 'images/animals/koala.jpg', audio: 'images/animals/koala.mp3' },
      { name: 'monkey', image: 'images/animals/monkey.jpg', audio: 'images/animals/monkey.mp3' },
      { name: 'penguine', image: 'images/animals/penguine.jpg', audio: 'images/animals/penguine.mp3' },
      { name: 'tiger', image: 'images/animals/tiger.jpg', audio: 'images/animals/tiger.mp3' },
      { name: 'elephant', image: 'images/animals/elephant.jpg', audio: 'images/animals/elephant.mp3' },
      { name: 'dolfin', image: 'images/animals/dolfin.jpg', audio: 'images/animals/dolfin.mp3' },
      // Add more animal words with image and audio properties
    ],
    Transportation: [
      { name: 'airplane', image: 'images/transportation/airplane.jpg', audio: 'images/transportation/airplane.mp3' },
      { name: 'bicycle',image: 'images/transportation/bicycle.jpg', audio: 'images/transportation/bicycle.mp3' },
      { name: 'bus', image: 'images/transportation/bus.jpg', audio: 'images/transportation/bus.mp3' },
      { name: 'car', image: 'images/transportation/car.jpg', audio: 'images/transportation/car.mp3' },
      { name: 'helicopter', image: 'images/transportation/helicopter.jpg', audio: 'images/transportation/helicopter.mp3' },
      { name: 'motorcycle', image: 'images/transportation/motorcycle.jpg', audio: 'images/transportation/motorcycle.mp3' },
      { name: 'ship', image: 'images/transportation/ship.jpg', audio: 'images/transportation/ship.mp3' },
      { name: 'taxi', image: 'images/transportation/taxi.jpg', audio: 'images/transportation/taxi.mp3' },
      { name: 'train', image: 'images/transportation/train.jpg', audio: 'images/transportation/train.mp3' },
      // Add more transportation words with image and audio properties
    ],
    Fruits: [
      { name: 'apple', image: 'images/fruits/apple.jpg', audio: 'images/fruits/apple.mp3' },
      { name: 'banana', image: 'images/fruits/banana.jpg', audio: 'images/fruits/banana.mp3' },
      { name: 'grapes', image: 'images/fruits/grapes.jpg', audio: 'images/fruits/grapes.mp3' },
      { name: 'kiwi', image: 'images/fruits/kiwi.jpg', audio: 'images/fruits/kiwi.mp3' },
      { name: 'mango', image: 'images/fruits/mango.jpg', audio: 'images/fruits/mango.mp3' },
      { name: 'orange', image: 'images/fruits/orange.jpg', audio: 'images/fruits/orange.mp3' },
      { name: 'pineapple', image: 'images/fruits/pineapple.jpg', audio: 'images/fruits/pineapple.mp3' },
      { name: 'strawberry', image: 'images/fruits/strawberry.jpg', audio: 'images/fruits/strawberry.mp3' },
      { name: 'watermelon', image: 'images/fruits/watermelon.jpg', audio: 'images/fruits/watermelon.mp3' },
      // Add more fruit words with image and audio properties
    ],
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleButtonClick = (audioSrc) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className="Vocabulary">
      <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
      {selectedCategory && (
        <VocabularyList
          category={selectedCategory}
          words={vocabularyData[selectedCategory]}
          onButtonClick={handleButtonClick}
        />
      )}
    </div>
  );
};

export default Vocabulary;
