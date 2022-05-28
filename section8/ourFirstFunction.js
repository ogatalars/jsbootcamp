// Functions are reusable procedures. Functions allows us to write reusable, modular code. We define a chunk of code that we can then
// execute at a later point. We use all the time
// Methods are functions (exemplo é o toUpperCase())

// 2 steps process
// Define and then Run the function

function funcName() {
  // do something here
}
function grumpus() {
  console.log("I am grumpus");
  console.log("I am grumpus");
  console.log("I am grumpus");
}
grumpus(); // aqui eu chamo a função
for (let i = 0; i < 50; i++) {
  grumpus();
}
