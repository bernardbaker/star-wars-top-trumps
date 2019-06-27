import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button as ShareButton, createShareLink } from "./Button";
import "@testing-library/react/cleanup-after-each";

describe("<ShareButton/>", () => {
  // Arrange
  const props = {
    label: "share the force",
    url: "https://swapi.co/api/starships/23/",
    uri: "/share/"
  };

  it("should render without props", () => {
    // Act
    const { getByText } = render(<ShareButton />);
    // Assert
    expect(getByText(/share/i)).toBeDefined();
  });

  it("should render with props", () => {
    // Act
    const { getByText } = render(<ShareButton {...props} />);
    // Assert
    expect(getByText(/share the force/i)).toBeDefined();
  });

  it("should render a link", () => {
    // Act
    const { getByTestId } = render(<ShareButton />);
    // Assert
    expect(getByTestId(/link/i)).toBeDefined();
  });

  it("should create a link which can be shared", () => {
    // Act
    const expected = "/share/23";
    const result = createShareLink(props);

    // Assert
    expect(result).toBe(expected);
  });
});
