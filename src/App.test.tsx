import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { label } from './Utils';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test('generates a label', () => {
  const result = label("React");
  expect(result).toBe("Hello REACT");
});

