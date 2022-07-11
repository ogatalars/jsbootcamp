// another way to get elements
const classeSecond = document.getElementsByClassName("second");
// Funciona do mesmo modo que o getElementByTagName, retorna uma colecao de elementos, mas nao é bem um array. Da pra fazer algums metodos, mas nao é um array.
const ul = document.getElementsByClassName("ul");
ul[0].style.backgroundColor = "red"; // acessando o primeiro elemento da colecao e mudando para vermelho.
