// Function expressions => There's another syntax for creating/defining functions;
const square = function (num) {
  return num * num;
};

square(5);

const sum = function (x, y) {
  return x + y;
};
console.dir(sum);
console.dir(square);

// podemos chamar a função como se fosse uma variável. E inclusive podemos denomiar elas, como o exemplo abaixo
const product = function multiply(x, y) {
  return x * y;
};
