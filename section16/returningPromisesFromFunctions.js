const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand > 0.5) {
        resolve("You got a dog!");
      } else {
        reject("You got a cat!");
      }
    }, 1000); // 1 second
  });
};
// willGetYouADog.then(() => {
//   console.log("You got a dog!");
// });
// willGetYouADog.catch(() => {
//   console.log("You got a cat!");
// });

makeDogPromise()
  .then(() => {
    console.log("You got a dog!");
  })
  .catch(() => {
    console.log("You got a cat!");
  });
