// first Rest => It looks like spread, but it's not.
// The arguments object -> available in every function, method, and constructor. It's an array-like object, has a length property;
// does not have array methods like push, pop, shift, unshift, etc.
// contains all the arguments passed to the function.
// not available inside of arrow functions!

function sum() {
  console.log(arguments);
}

sum(1, 2, 3, 4, 5, 6);

function divide() {
  const argsArr = [...arguments];
  argsArr.reduce((total, currVa) => {
    return total / currVa;
  });
}

function fullName(first, last) {
  console.log(arguments);
}
// YOU CANNOT USE ARGUMENTS IN ARROW FUNCTIONS!
const multiply = () => {
  return args.reduce((total, currVal) => {
    return total * currVal;
  });
};
console.log(multiply(1, 2, 3, 4, 5, 6));
