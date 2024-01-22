// VocabularyList.js
import React from 'react';

const VocabularyList = ({ category, words, onButtonClick }) => {
  return (
    <div className="vocabulary-list">
      <div className="word-container">
        {words.map((word, index) => (
          <div key={index} className="word">
            <img
              src={word.image}
              alt={word.name}
              onClick={() => onButtonClick(word.audio)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <div className="button-container">
              {/* <button onClick={() => onButtonClick(word.audio)}>play</button> */}
              <h3>{word.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyList;
