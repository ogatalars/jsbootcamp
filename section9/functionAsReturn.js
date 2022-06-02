function makeBetweenFunc(min, max) {
  return function (val) {
    return val >= min && val <= max;
  };
}

const inAgeRange = makeBetweenFunc(18, 30);
const isInNineties = makeBetweenFunc(1990, 2000);
console.log(inAgeRange(7));
console.log(inAgeRange(20));
console.log(inAgeRange(30));
console.log(isInNineties);
console.log(isInNineties(1990));
// a função retorna outra função
// a função retornada é uma função que recebe um valor e retorna um booleano
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}
const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);
console.log(triple);
console.log(triple(3)); // -> 9
console.log(double(3)); // -> 6
console.log(halve(3)); // -> 1.5
//ideia de lexical scope
