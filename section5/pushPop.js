// array methods: Push, Pop, Shift, Unshift
// Push: adiciona um elemento no final do array
// pop: remove o ultimo elemento do array
// shift: remove o primeiro elemento do array
// unshift: adiciona um elemento no inicio do array

let topMovies = ["Big Fish", "matrix", "Fantastic Captain", "The Godfather"];
console.log(topMovies);
topMovies.push("Vivre sa vie");
topMovies.push("Toy Story");
topMovies.push("Chihiro");
console.log(topMovies);
topMovies.push("King Lion");
console.log(topMovies);
topMovies.pop(); // removeu o king Lion
console.log(topMovies);
// se usarmos o pop infinitamnete uma hora ele retorna undefined
