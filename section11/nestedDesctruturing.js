const results = [
  {
    first: "John",
    last: "Doe",
    country: "USA",
  },
  {
    first: "Jane",
    last: "Lilesa",
    country: "UK",
  },
  {
    first: "Juan",
    last: "Perez",
    country: "Mexico",
  },
];
const [, { country }] = results;
const [{ first: goldWinner }, { country: pais }] = results;
