import React from "react";
import SingleCardDeck from "./SingleCardDeck";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<SingleCardDeck/>", () => {
  it("render a single card", async () => {
    // Act
    const { getAllByTestId } = render(<SingleCardDeck />);
    // Assert
    const cards = await waitForElement(() => getAllByTestId(/card/i));
    expect(cards.length).toBe(1);
  });
});
