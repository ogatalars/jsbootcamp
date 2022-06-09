// rest param collects all remaining arguments into an actual array. It is not the same as spread
function sum(...nomeDaArray) {
  console.log(nomeDaArray);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
}

function fullName(first, last, ...titles) {
  console.log(first, last, titles);
}
