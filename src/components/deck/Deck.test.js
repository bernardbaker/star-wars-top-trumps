import React from "react";
import Deck from "./Deck";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<Deck/>", () => {
  it("renders a list of cards", async () => {
    // Act
    const { getAllByTestId } = render(<Deck />);
    // Assert
    const cards = await waitForElement(() => getAllByTestId(/card/i));
    expect(cards.length).toBe(10);
  });
});
