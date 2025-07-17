import React, { useEffect, useState } from 'react';
import '../css/Gallery.css';

function Gallery() {
  const totalImages = 25;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const images = Array.from({ length: totalImages }, (_, i) => `/gallery/${i + 1}.jpg`);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Gallery</h2>
        <p>Alles geregeld. Snel, professioneel en altijd scherp.</p>
      </div>

      {images.map((imgSrc, index) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`Gallery ${index + 1}`}
          className={`gallery-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default Gallery;
