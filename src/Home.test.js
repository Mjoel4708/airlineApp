import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

test('renders airlines data', () => {
  render(<Home />);
  const airlineName = screen.getByText(/Airline Name/i);
  const country = screen.getByText(/Country/i);
  const headquarters = screen.getByText(/Headquarters/i);
  expect(airlineName).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(headquarters).toBeInTheDocument();
});

test('opens and closes airline modal', () => {
  render(<Home />);
  const airlineCard = screen.getByText(/Airline Name/i);
  fireEvent.click(airlineCard);
  const modal = screen.getByTestId('airline-modal');
  expect(modal).toBeInTheDocument();
  const closeButton = screen.getByTestId('close-button');
  fireEvent.click(closeButton);
  expect(modal).not.toBeInTheDocument();
});
