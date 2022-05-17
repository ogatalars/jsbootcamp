let x = 7;
console.log(x == 7 || (x === 3 && x > 10));
// temos ordem de precedencia nos operadores lógicos
// sempre usar parenteses para coletar a ordem que queremos.
// basicamente -> not(!) tem maior precedencia que and(&&) e or(||) e && tem maior precedencia que ||
