// BUilt-in methods return values when we call them. We can store those values in some variable.

const yell = "WOOF".toLowerCase();
console.log(yell);
const idx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf("3");
console.log(idx);
// Ha diferença entre print e return. O print imprime na tela e o return retorna o valor e pode ser guardado.
// Our functions print values out, but DO NOT return anything, so we cant store them in a variable and call it later on.
function add(x, y) {
  return x + y;
}
const total = add(5, 5);
console.log(total);

// Há algumas regras: 1 - YOU CAN ONLY RETURN ONE THING FROM A FUNCTION
// 2 - YOU CANNOT RETURN A VALUE FROM A FUNCTION IF YOU DONT HAVE A VARIABLE TO STORE IT IN.
