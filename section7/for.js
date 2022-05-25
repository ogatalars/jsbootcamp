// for ([initial Expression]; [Conditional]; [Increment or decrement expression]) { do something }
// de certa maneira, a sintaxe parece um if só que roda varias vezes
for (let i = 0; i <= 10; i++) {
  console.log("Hello", i);
}
// esse let i= 0 é onde começa
// i < = vai até o 10
// i ++ => eu somo cada loop 1

for (let i = 5; i <= 10; i += 3) {
  console.log("Hello", i);
}
// o exemplo pode acontecer ao contrário
for (let i = 50; i >= 0; i--) {
  console.log("Contagem regressiva", i);
}
