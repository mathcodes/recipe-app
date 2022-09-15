import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders create button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Create/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders carousel", () => {
  render(<App />);
  const imgShown = screen.getByAltText(/Slide 1/i);
  expect(imgShown).toBeInTheDocument();
});
