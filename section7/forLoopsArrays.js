// To loop over an array, start at 0 and continue to the last index (length - 1)

const animals = ["dog", "cat", "bird", "fish"];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

const examScores = [88, 92, 75, 91, 82];
for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}
const word = "stressed";
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}
