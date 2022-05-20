// includes - looks for a value -=> retorna true or false
// indexOf - just like str.indexOf (mostra onde está a posição)
let ingredientes = ["farinha", "ovo", "leite", "sal", "azeite"];
console.log(ingredientes.includes("leite"));
console.log(ingredientes.includes("milho"));

// é possivel colocar um indice
console.log(ingredientes.includes("farinha", 1));

// indexOf - mostra onde está a posição
console.log(ingredientes.indexOf("sal"));
console.log(ingredientes.indexOf("milho"));
