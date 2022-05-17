// else happens when the condition is false (is the final) => if nothing else was true, do this...

let rating = 2;
if (rating === 3) {
  console.log("You are a superstar!");
} else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
} else if (rating === 1) {
  console.log("Needs improvement");
} else {
  console.log("Invalid rating");
}

let highScore = 100;
let userScore = 60;

if (userScore >= highScore) {
  console.log(`Congrats! You got a high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(`Sorry, you did not beat your high score of ${highScore}`);
}
