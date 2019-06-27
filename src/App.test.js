import React from "react";
import App from "./App";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import { JestEnvironment } from "@jest/environment";

describe("<App/>", () => {
  it("renders a list of cards", async () => {
    // Arrange
    jest.setTimeout(10000);
    // Act
    const { getAllByTestId } = render(<App />);
    // Assert
    const cards = await waitForElement(() => getAllByTestId(/card/i));
    expect(cards.length).toBe(10);
  });

  it("renders an audio element when the app is pressed", async () => {
    // Arrange
    global.window.HTMLMediaElement.prototype.play = jest.fn();
    jest.setTimeout(10000);

    // Act
    const { getByTestId } = render(<App />);
    // Assert
    const audioTrigger = await waitForElement(() => getByTestId(/app/i));
    fireEvent.click(audioTrigger);

    const audioElement = getByTestId(/audio-theme-song/);
    expect(audioElement).toBeDefined();
  });

  it("renders an audio element when the share button is pressed", async () => {
    // Arrange
    global.window.HTMLMediaElement.prototype.play = jest.fn();
    jest.setTimeout(10000);

    // Act
    const { getByTestId, getAllByTestId } = render(<App />);
    // Assert
    const shareLink = await waitForElement(() => getAllByTestId(/link/i));
    fireEvent.click(shareLink[0]);

    const audioElement = getByTestId(/audio-share-button/);
    expect(audioElement).toBeDefined();
  });
});
