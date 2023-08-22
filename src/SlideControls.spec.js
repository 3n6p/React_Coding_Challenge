import React from 'react';
import { render } from '@testing-library/react';
import SlideControls from './SlideControls';

test('renders slide controls', () => {
  const { getByText } = render(
    <SlideControls
      currentSlide={0}
      totalSlides={3}
      onNext={() => {}}
      onPrevious={() => {}}
      onRestart={() => {}}
    />
  );

  const previousButton = getByText(/Previous/i);
  const nextButton = getByText(/Next/i);
  const restartButton = getByText(/Restart/i);

  expect(previousButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  expect(restartButton).toBeInTheDocument();
});
