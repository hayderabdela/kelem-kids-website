// components/CategoryList.js
import React from 'react';
import "../vocabulary.css" 

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
      <div className='incateg'>
          <img src={"voicon.jpg"} alt='logo' ></img>
          <h2>LearnVocabulary For kids</h2>
        <img src={"images/other/img1.jpg"} alt='logo' ></img>
      </div>
      <div className='btn'>
              <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
     </div>

    </div>
  );
};

export default CategoryList;
