import { render, screen } from '@testing-library/react';
import App from './App';
import http from "http";
import mockserver from "mockserver"
http.createServer(mockserver('path/to/your/mocks')).listen(9001);
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
