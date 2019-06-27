// Get a list of starships
export const listOfStarShips = async () => {
  const response = await fetch("https://swapi.co/api/starships/?page=1");
  const json = await response.json();
  return json.results ? json.results : [];
};

// Get a single starship
export const singleStarShip = async id => {
  const response = await fetch(`https://swapi.co/api/starships/${id}/`);
  const json = await response.json();
  return json ? json : {};
};
