// Destructuring -> A short, clean syntax to unpack: values from arrays, properties from objects into distinct variables
// Array Destructuring
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
];
const [gold, silver, bronze] = raceResults;
// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

const [fastest, ...others] = raceResults;

console.log(`Gold: ${gold}`);
console.log(`Silver: ${silver}`);
console.log(`Bronze: ${bronze}`);
console.log(`Fastest: ${fastest}`);
console.log(`Others: ${others}`);

const [, , , fourth] = raceResults;
// ordem dos parametros importa
