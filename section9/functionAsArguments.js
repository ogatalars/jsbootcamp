// functions that operate on/with other functions. They can: Accept other functions as arguments, Return other functions as results.
//Function as arguments
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAHHA");
}
callTwice(laugh);

function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log("boohoo");
}

callThreeTimes(cry);

function rage() {
  console.log("I'm so angry!");
}
callThreeTimes(rage);

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}
repeatNTimes(rage, 10);

function pickOne(f1, f2) {
  let random = Math.random();
  if (random < 0.5) {
    f1();
  } else {
    f2();
  }
}
pickOne(rage, cry);
