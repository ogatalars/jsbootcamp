// We can loop over the keys of an Object, using Object.keys()
// BUT we can us for..in to loop over the keys in an object, example:
// for(variable in object) {
//     statement
// }
const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
  worldSeries: 2500000,
  goldGlobe: 1000000,
};

for (let propriedades in jeopardyWinnings) {
  console.log(propriedades);
}
// propriedades = keys
// IN sempre em objetos
// ARRAYS tecnicamente são objetos.
for (let k in [88, 99, 55, 23, 11, "1"]) {
  console.log(k);
}
