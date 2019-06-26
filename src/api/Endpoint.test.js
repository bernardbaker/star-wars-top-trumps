import React from "react";
import { listOfStarShips } from "./Endpoint";
import { render, waitForElement } from "@testing-library/react";

describe("Endpoint", () => {
  it("should return an array of the first ten results", async () => {
    // Act
    const list = await listOfStarShips();
    // Assert
    expect(list).toBeDefined();
    expect(list.length).toBe(10);
  });
});
