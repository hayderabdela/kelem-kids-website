// VocabularyList.js
import React from 'react';

const VocabularyList = ({ category, words, onImageClick }) => {
  return (
    <div className="vocabulary-list">
      <div className="word-container">
        {words.map((word, index) => (
          <div key={index} className="word">
            <img
              src={word.image}
              alt={word.name}
              onClick={() => onImageClick(word.audio)}
              style={{ cursor: 'pointer', marginRight: '10px' }}
            />
            <p>{word.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyList;
