import React, { useState, useEffect } from 'react';
import '../styles/slideshow.css'; // Import custom styles for the slideshow

const Slideshow = () => {
  const images = [
    "/img/img1.jpg", 
    "/img/img2.jpg", 
    "/img/img3.png", 
    "/img/img4.png", 
    "/img/img5.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
      <div style={{ textAlign: 'center' }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
