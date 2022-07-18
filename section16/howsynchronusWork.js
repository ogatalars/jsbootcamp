// what happens when something takes a long time?
const newTodo = input.value; // get user input
saveToDatabase(newTodo); // save to database -> this could take a while
input.value = ""; // clear input -> reset form

// Fortunately, we have a workaround: -> CALLBACKS
console.log("I happen first");
setTimeout(() => {
  console.log("I print after 3 seonds");
}, 3000);
console.log("I print second!");
// the trick is the brower does the work, and it usually it is writted by c++ or c#.

// Browsers come with web apis that are able to handle certain tasks in the background9like making requests or setTimeout)
// The js call stack recognizes these web api functions and passes them off to the browser to take care of
// once the browser finishes those tasks, they return and are pushed onto the stack as a callback
