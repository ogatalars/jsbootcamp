// FUNCTIONS ARE OBJECTS IN JAVASCRIPT

// Podemos guardar uma função dentro de uma array
function add(x, y) {
  return x + y;
}
const substract = function (x, y) {
  return x - y;
};
function multiply(x, y) {
  return x * y;
}
const divide = function (x, y) {
  return x / y;
};

const operations = [add, substract, multiply, divide];
console.log(operations[1](10, 5)); // subtract 10 from 5
console.log(operations[0](10, 5)); // add 10 + 5

for (let func of operations) {
  let result = func(10, 5);
  console.log(result);
}

const thing = {
  doSomething: multiply,
  doNothing: substract,
};
console.log(thing.doSomething(50, 2));
console.log(thing.doNothing(300, 10));
