// Template literals are strings that allow embedded expressions, which will be evalued and then turned into a resulting string.
// The following is an example of a template literal:
let count = 5;
console.log(`I counted ${count} items`);
// `I counted ${count} items`; atentar pelo fato de ser crase
// ${} ai consigo colocar uma expressao dentro de uma string
// OBS: Não é necessário colocar o '`' no inicio e no final da string
console.log(`A soma é ${1000 + 2000 / 2}`);
console.log(`A soma é {1000 + 2000/2}`);

let item = "Coffee";
let price = 1.99;
let quantity = 10;
console.log(
  `A ${item} costs ${price * quantity} because you wanted ${quantity}`
);
