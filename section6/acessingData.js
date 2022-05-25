const numbers = {
  100: "one hundred",
  16: "Sixteen",
  "76 trombones": "seventy six trombones",
};
console.log(numbers[100]);
console.log(numbers[16]);
console.log(numbers["76 trombones"]);
// console.log(numbers.76 trombomnes) // não dá pra usar

const pallette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
  black: "#000",
};
console.log(pallette.red);
// console.log(pallette[blue]); // vai dizer que blue não ta definido
let color = "yellow";
pallette[color]; // #f9ca24

let mysteryColor = "yellow";
console.log(mysteryColor);
// Quando não tivermos como acessar pelo dot notation (.) usamos o branchet [] para acessar os values do objeto.
