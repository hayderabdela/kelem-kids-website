// Slider.jsx
import React, { useState } from "react";
import "./Slider.css";

import image1 from "../../assets/k1.jpg";
import image2 from "../../assets/k2.jpg"; 
import image3 from "../../assets/k3.jpg"; 
import image4 from "../../assets/k4.jpg"; 
import image5 from "../../assets/k5.jpg"; 
import image6 from "../../assets/k6.jpg"; 

const images = [image1, image2, image3, image4, image5, image6];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button className="slider-button next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
