import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renderer working? ', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search by skills to find devs by their talents/i);
  expect(linkElement).toBeInTheDocument();
});
