// Spread in array literals - Crete a new array using an existing array. Spreads the elements from one array into a new array.
const cephalopods = ["coral", "leech", "nautilus", "starfish"];
const gastropods = [
  "dungeness crab",
  "common stingray",
  "electric ray",
  "great white",
];
const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods, ...cnidaria];
console.log(mollusca);
// the order does it matter
const inverts = [...cnidaria, ...gastropods, ...cephalopods];
const copyCephalopds = [...cephalopods];
console.log(copyCephalopds === cephalopods); // false - copy, não tem mesma a referência
