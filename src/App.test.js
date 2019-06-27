import React from "react";
import App from "./App";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import { JestEnvironment } from "@jest/environment";

describe("<App/>", () => {
  it("renders a list of cards", async () => {
    jest.setTimeout(10000);
    // Act
    const { getAllByTestId } = render(<App />);
    // Assert
    const cards = await waitForElement(() => getAllByTestId(/card/i));
    expect(cards.length).toBe(10);
  });
});
