import React from "react";
import App from "./App";
import { render, waitForElement } from "@testing-library/react";

describe("<App/>", () => {
  it("renders default boilerplate text", async () => {
    // Act
    const { getByText } = render(<App />);
    // Assert
    await waitForElement(() => getByText(/learn react/i));
  });
});
