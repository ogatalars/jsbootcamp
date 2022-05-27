for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
// break é utilizado para parar um loop
// ou seja, quando o loop chegar no número 5, ele para de rodar
// O break somente é utilizado dentro de loops e ele tem scope.

while (true) {
  if (Math.random() > 0.5) {
    console.log("oi");
    break;
  }
}
