function square(num) {
  console.log(num * num);
}
// arguments are actually inputs, but the right term is parameters when we define a function
// BASICAMENTE ARGUMENTOS QUANDO NÓS CHAMAMOS A FUNÇÂO E QUANDO NOS DEFINIMOS CHAMAMOS DE PARAMETROS
function sum(x, y) {
  console.log(x + y);
}

// separamos por virgula, igual python
sum(10, 20);
sum(1, 1);
// nesse caso não importa a ordem

function divide(a, b) {
  console.log(a / b);
}
divide(1, 4);
divide(4, 1);
// a ordem realmente importa aqui
