import React from "react";
import App from "./App";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<App/>", () => {
  it("renders a list of cards", async () => {
    // Act
    const { getAllByTestId } = render(<App />);
    // Assert
    const cards = await waitForElement(() => getAllByTestId(/card/i));
    expect(cards.length).toBe(10);
  });
});
