function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`You rolled a ${roll}`);
}
rollDie();

function jogaDados() {
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
}
jogaDados();
// podemos chamar uma função dentro de outra função
