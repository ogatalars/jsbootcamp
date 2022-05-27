const target = Math.floor(Math.random() * 10);
console.log(target);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(guess);
  guess = Math.floor(Math.random() * 10);
  console.log(`Target: ${target} Guess: ${guess}`);
}
