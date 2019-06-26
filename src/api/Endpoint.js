export const listOfStarShips = async () => {
  const response = await fetch("https://swapi.co/api/starships/?page=1");
  const json = await response.json();
  return json.results;
};
