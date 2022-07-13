// get e setting atributes
// get -> retorna o valor do atributo
// set -> altera o valor do atributo

const range = document.querySelector('input[type = "range"]');
range.getAttribute("max"); // retorna o valor do atributo
range.getAttribute("min"); // retorna o valor do atributo
// se nao tiver, retorna null
range.setAttribute("max", "10"); // altera o valor do atributo MAX para 10
