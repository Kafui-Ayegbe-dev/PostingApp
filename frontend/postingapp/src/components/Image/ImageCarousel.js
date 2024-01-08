import React, { useState, useEffect } from "react";
//import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset the carousel when the images change
    setCurrentIndex(0);
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Prev</button>
      <div className="carousel-image">
        {images.length > 0 && (
          <img src={URL.createObjectURL(images[currentIndex])} alt={`Image ${currentIndex}`} />
        )}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageCarousel;
