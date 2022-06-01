// Scope -> Variable Visibility in JavaScript. The location where a variable is defined dictates where we have access to that variable.

function lol() {
  let person = "Tom";
  const age = 45;
  var color = "red";
  console.log(age);
  console.log(person);
}
lol();
console.log(person); // not defined
console.log(age); // not defined
console.log(color); // red

function helpMe() {
  let msg = "Im on fire!";
  msg; // here msg exists
}
msg; // not defined

let bird = "mandarin duck";
console.log(bird);
function BirdWatch() {
  let bird = "golden pheasant"; // this is possible, cause we are in a different scope
  console.log(bird);
}
BirdWatch();
