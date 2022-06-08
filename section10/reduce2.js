// there are other options with reduce.
let grades = [
  87, 64, 96, 92, 88, 91, 73, 70, 89, 73, 85, 66, 76, 68, 74, 65, 84, 86,
];
const maxGrade = grades.reduce((max, currentVal) => {
  if (currentVal > max) {
    return currentVal;
  } else {
    return max;
  }
});
console.log(maxGrade);
// Um jeito de achar o maior valor é usando o Math.max também, mas é possivel atraves do reduce.
// const maxGrade = Math.max(...grades);

const maxGrade2 = grades.reduce((max, currentVal) => {
  return Math.max(max, currentVal);
});
const minGrade = grades.reduce((min, currentVal) => {
  return Math.min(min, currentVal);
});
