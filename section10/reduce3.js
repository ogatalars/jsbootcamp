const votes = ["y", "y", "n", "y", "y", "y", "n", "y", "y", "y", "n", "n", "n"];
const results = votes.reduce((tally, valor) => {
  if (tally[valor]) tally[valor]++;
  else tally[valor] = 1;
  return tally;
}, {});

console.log(results);
