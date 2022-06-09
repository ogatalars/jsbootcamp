// function multiply(x, y) {
//     return x * y;
// }
// se alguem não passa como parametro o y, ele não assume nenhum valor e por isso retorna vazio
// para arrumar isso existem algumas possibilidades:

// Antiga possibilidade:

// function multiply(x, y) {
//     if (y === undefined) {
//         y = 1;
//     }
//     return x * y;
// }

// Nova possibilidade (mais utilizada)

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(6)); // ele vai usar b = 1, então retorna 6 * 1 = 6
console.log(multiply(6, 2));

const greet = (person, greeting = "Hello") => {
  return `${greeting} ${person}`;
};

const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};

// default parameters é bem utilizado, mas vale dizer que a ORDEM importa.
// se você passar o y antes do x, ele vai retornar undefined.
// BASICAMENTE CHAMAMOS ARGUMENTOS QUANDO NÓS CHAMAMOS A FUNÇÂO E

//  QUANDO NOS DEFINIMOS A FUNÇÃO CHAMAMOS DE PARAMETROS
