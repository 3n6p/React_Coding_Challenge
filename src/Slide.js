import React from 'react';
import './App.css';

function Slide({ title, content, imageSrc, slideNumber }) {
  return (
    <div className="slide">
      <h2>{title}</h2>
      {imageSrc && <img src={imageSrc} alt={`Slide ${slideNumber}`} />}
      <p>{content}</p>
      <p className="slide-number">Slide {slideNumber}</p>
    </div>
  );
}

export default Slide;
