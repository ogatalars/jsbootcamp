// concat => merge arrays
// serve para UNIR dois arrays
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
let novoArray = array1.concat(array2);
console.log(novoArray);

let fruits = ["banana", "maçã", "laranja", "pera", "uva"];
let vegetables = ["alface", "tomate", "cenoura", "repolho"];
let meats = ["carne", "frango", "peixe"];
let allFood = fruits.concat(vegetables, meats);
console.log(allFood);
