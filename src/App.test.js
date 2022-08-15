
// ve si esta el texto... lo ejecuto con npm test
//testeo manual

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
// este es el texto q vamos a buscar /learn react/i
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
