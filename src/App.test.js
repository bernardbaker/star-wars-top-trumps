import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, waitForElement } from "@testing-library/react";

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders default boilerplate text", async () => {
    // Render new instance in every test to prevent leaking state
    const { getByText } = render(<App />);

    await waitForElement(() => getByText(/learn react/i));
  });
});
