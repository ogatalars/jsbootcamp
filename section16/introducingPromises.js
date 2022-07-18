// Enter promises
// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// Promises a pattern for writing async code
// Basically Promises are objects that represent an eventual either FAILRE or SUCCESS of some task.
// Promises are used to handle asynchronous operations.
// A promise is a returned object o which you attach callbacks, instead of passing callbacks into a function.
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
  //resolve -  if the promise is resolved, the callback will be called with the value passed to resolve.
  //reject - if the promise is rejected, the callback will be called with the value passed to reject.
});
willGetYouADog.then(() => {
  // then is a method of the promise object. It happens WHEN the promise is resolved.
  console.log("You got a dog");
});
willGetYouADog.catch(() => {
  consolelog("No dog for ya"); // catch is a method of the promise object. It happens WHEN the promise is rejected.
});
