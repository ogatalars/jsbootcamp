// // implicit return
// const isEven = function(num) { // regular function expression
//     return num % 2 === 0;
// }
// const isEven = (num) => { // arrow function with parens around param
//     return num % 2 === 0;
// }
// const isEven = num => {num % 2 === 0}; //no parens around param

// const isEven = num => (num % 2 === 0); // implicit return
// const isEven = num => num % 2 === 0; // implicit return

const square = (n) => n * n; // tem um return implicito

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 100];
const doubles = nums.map((n) => n * 2);
const triples = nums.map((n) => n * 3);
