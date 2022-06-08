// reduce executes a reducer function on each element of the array, resulting in a single output value.
// reduce is a powerful tool for transforming arrays into single values.
[3, 4, 7, 9, 11].reduce(
  (accumalator, currentValue) => accumalator + currentValue
);

const nums = [3, 4, 7, 9, 11];
const product = nums.reduce((acum, currentV) => acum * currentV);
console.log(product);
