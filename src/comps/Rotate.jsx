import React, { useState } from "react";
import "./rotate.css";

const Rotate = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="iphone-container" onClick={handleClick}>
      <div className="iphone-image">
        <img src={images[currentIndex]} alt={`iPhone 13 ${currentIndex}`} />
      </div>
    </div>
  );
};

export default Rotate;
