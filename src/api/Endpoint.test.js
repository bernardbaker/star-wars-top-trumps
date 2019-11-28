import { listOfStarShips, singleStarShip } from "./Endpoint";

describe("Endpoint", () => {
  it("should return an array of the first ten results", async () => {
    // Act
    const list = await listOfStarShips();
    // Assert
    expect(list).toBeDefined();
    expect(list.length).toBe(10);
  }, 20000);

  it("should return a single result", async () => {
    // Arrange
    const id = 2;
    // Act
    const list = await singleStarShip(id);
    // Assert
    expect(list).toBeDefined();
  }, 20000);
});
