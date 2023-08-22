import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import SlideControls from './SlideControls';
import './App.css';

function App() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        const filteredSlides = data.slice(0, 5); // Limiting to 5 slides for example
        setSlides(filteredSlides);
      })
      .catch(error => {
        console.error('Error fetching slides:', error);
      });
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const restartSlides = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="app">
      <Slide
        title={slides[currentSlide]?.title}
        content={slides[currentSlide]?.title}
        imageSrc={slides[currentSlide]?.url}
        slideNumber={currentSlide + 1}
      />
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrevious={prevSlide}
        onRestart={restartSlides}
      />
    </div>
  );
}

export default App;
