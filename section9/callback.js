// Callback functions is a fucntion passed into another function as an argument, which is then invoked inside the outer function.
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAHHA");
}
callTwice(laugh); // laugh is passed in as an argument, so it is a callback

function grumpus() {
  alert("Guaehuaheuhuah");
}
setTimeout(grumpus, 5000); // setTimeout(function, delay)
setTimeout(function () {
  alert("Guaehuaheuhuah");
}, 1000);

// exemplo usando JS DOM
const btn = document.querySelector("btn");
btn.addEventListener("click", function () {
  alert("POR QUE CLICOU EM MIM AMIGO?");
});
