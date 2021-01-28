import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders New Game button", () => {
  render(<App />);
  const newGameButton = screen.getByText("New Game");
  expect(newGameButton).toBeInTheDocument();
});

// To do: tests
