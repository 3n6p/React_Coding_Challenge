import React from 'react';
import { render } from '@testing-library/react';
import Slide from './Slide';

test('renders slide content', () => {
  const { getByText } = render(
    <Slide
      title="Test Slide"
      content="Test content"
      imageSrc="test-image.jpg"
      slideNumber={1}
    />
  );

  const titleElement = getByText(/Test Slide/i);
  const contentElement = getByText(/Test content/i);
  const imageElement = getByTestId(/slide-image/i);
  const slideNumberElement = getByText(/Slide 1/i);

  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(slideNumberElement).toBeInTheDocument();
});
