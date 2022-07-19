const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand > 0.5) {
        resolve(url);
      } else {
        reject(url);
      }
    }, 1000); // 1 second
  });
};

fakeRequest()
  .then(() => {
    console.log("You got a dog!");
  })
  .catch(() => {
    console.log("You got a cat!");
  });
