import React from 'react';

function SlideControls({ currentSlide, totalSlides, onNext, onPrevious, onRestart }) {
  return (
    <div className="controls">
      <button onClick={onPrevious} disabled={currentSlide === 0}>
        Previous
      </button>
      <button onClick={onNext} disabled={currentSlide === totalSlides - 1}>
        Next
      </button>
      <button onClick={onRestart} disabled={currentSlide === 0}>
        Restart
      </button>
    </div>
  );
}

export default SlideControls;
