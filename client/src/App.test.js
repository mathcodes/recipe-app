import { render, screen } from "@testing-library/react";
import App from "./App";
import RecipeDisplaySelect from "./components/RecipeDisplaySelect";

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

test("correct image", async () => {
  render(<RecipeDisplaySelect />);
  const imgLives = await screen.findAllByRole("img");
  expect(imgLives[0]).toHaveProperty(
    "src",
    "https://farmhouseharvest.net/wp-content/uploads/2022/01/smoked-pork-shoulder-recipe-3.png"
  );
});
