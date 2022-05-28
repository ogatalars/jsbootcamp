// arguments are actually inputs, that can change some values insides the function or even the output
function greet(person = "pessoa") {
  console.log(`Hi, ${person}`);
}
greet();
greet("Agatha");
//  podemos deixar um default no argumento, para que ele seja executado caso não seja passado nada

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`You rolled a ${roll}`);
}
rollDie();

function jogaDados(numRolls) {
  for (let i = 0; i <= numRolls; i++) {
    rollDie();
  }
}
jogaDados(10);
