// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry",
  "The Good, the Bad and the Ugly",
];
const godFather = movies.find((movie) => {
  return movie.includes("Godfather");
});
