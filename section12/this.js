//  This is the keyword can be a major point of confusion and misery and hardship and general suffering in the life of a new js developer.
// The keyword this is used in the context of a function to refer to the object that is currently executing the function.

function sayHi() {
  console.log("hi");
  console.log(this);
}
const greet = function () {
  console.log(this);
};
