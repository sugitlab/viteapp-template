import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App Test', () => {
  render(<App />);
  expect(screen.getByText('Vite + React')).toBeInTheDocument();
});
