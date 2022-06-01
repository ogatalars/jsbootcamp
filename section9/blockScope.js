let radius = 8;
if (radius > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radius;
}

console.log(radius); // 8
console.log(PI); // not defined
console.log(circ); // not defined
// PU E CIRC ARE SCOPED TO THE BLOCK

if (true) {
  let animal = "John"; // aqui não difere se for let ou var
  console.log(animal);
}
console.log(animal); // not defined
// blocos {} sao o que ocorre entre esses colchetes;
//

if (true) {
  var animal = "eel";
  console.log(animal);
}
console.log(animal); // eel, pois var é global

let animals = ["dog", "cat", "bird"];
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
console.log(i);

// não é possivel fazer for com const
