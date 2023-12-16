// components/CategoryList.js
import React from 'react';

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
      <div className='incateg'>
      <h2>LearnVocabulary For kids</h2>
      <img src={"voicon.jpg"} alt='logo' ></img>
      </div>
      <img src={"images/other/img1.jpg"} alt='logo' ></img>

      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
