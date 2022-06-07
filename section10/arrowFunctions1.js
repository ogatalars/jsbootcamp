// Arrow functions is a new way to write function in javascript.
// Syntactic sugar for function.
// syntactically compact alternative to a regular funcion expression.
const square = (x) => {
  return x * x;
};

const sum = (a, b) => {
  return a + b;
};

const isEven = (num) => {
  return num % 2 === 0;
};

const multiply = (y, u) => {
  return y * u;
};

//parens are optional if THERE's only on parameter:
const division = (x) => {
  return x / 2;
};

// use empty parens for functions w/ no parameters:
const singASong = () => {
  return "LA LA LA LA LA";
};
