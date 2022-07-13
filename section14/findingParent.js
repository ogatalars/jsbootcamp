// finding parents, siblings, children
const firstLi = document.querySelector("li");
firstLi.parentElement; // retorna o elemento pai
firstLi.parentElement.parentElement; // retorna o elemento pai do pai
firstLi.parentElement.parentElement.parentElement; // retorna o elemento pai do pai do pai
const ul = document.querySelector("ul");
ul.children; // retorna todos os filhos
ul.children[0]; // retorna o primeiro filho
ul.children[0].children; // retorna todos os filhos do primeiro filho
const h1 = document.querySelector("h1");
h1.nextElementSibling; // retorna o elemento seguinte
h1.nextElementSibling.nextElementSibling; // retorna o elemento seguinte do seguinte
