// spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements
// (for array literals) are expected, or an object expression to be expanded in places where zero or more property assignments are expected.
// the key word in the spread syntax is ... EXPANDED.
const nums = [
  1, 2, 3, 4, 5, 1, 233, 24, 123132, 123, 678, 346, 33, 1, 0, -1, 10000, 120385,
  123566, 1234567, 12345678, 123456789, 1234567890,
];
// Se quisermos pegar o numero maior desse array teriamos, não conseguimos utilizando o Math.max pois ele só aceita um retorno de array. Então...
const max = Math.max(...nums); // usamos o spread que é esses ...
console.log(max); //
// O spread é um operador que permite que um array ou objeto seja expandido em uma lista de parâmetros ou propriedades de uma expressão de objeto.
const colors = ["red", "green", "blue", "grey", "orange"];
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
// giveMeFour(giveMeFour(colors));
giveMeFour(...colors);
