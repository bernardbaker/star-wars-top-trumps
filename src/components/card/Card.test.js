import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";
import { createShareLink } from "../share/Button";
import "@testing-library/react/cleanup-after-each";

describe("<Card/>", () => {
  // Arrange
  const props = {
    MGLT: "40",
    cargo_capacity: "6000000",
    consumables: "2 years",
    cost_in_credits: "8500000",
    crew: "854",
    hyperdrive_rating: "2.0",
    length: "300",
    manufacturer: "Kuat Drive Yards",
    max_atmosphering_speed: "800",
    model: "EF76 Nebulon-B escort frigate",
    name: "EF76 Nebulon-B escort frigate",
    passengers: "75",
    starship_class: "Escort ship",
    url: "https://swapi.co/api/starships/23/",
    share_label: "share the force",
    uri: "/share/"
  };

  it("should render without props", () => {
    // Act
    const { getByText } = render(<Card />);
    // Assert
    expect(getByText(/share/i)).toBeDefined();
  });

  it("should render with props", () => {
    // Act
    const { getByText } = render(<Card {...props} />);
    // Assert
    expect(getByText(/share the force/i)).toBeDefined();
  });

  it("should render a link", () => {
    // Act
    const { getByTestId } = render(<Card />);
    // Assert
    expect(getByTestId(/link/i)).toBeDefined();
  });

  it("should render the share link", () => {
    // Act
    const { getByTestId } = render(<Card {...props} />);
    const node = getByTestId(/link/);
    // Assert
    expect(node).toBeDefined();
  });
});
