let fruit = "orange";
let color = fruit;
console.log(color);
fruit = "apple";
console.log(color);
// Value Type Variabel
// note que o valor de color não muda, aidna que o fruit é diferente, justamente porque há uma gravação na memoria. Um ponto de referência.
// Isso não acontence em arrays
let nums = [5, 6, 12, -1, 0];
let otherNums = nums; // aponta para a mesma referência
// se eu troco NUMS, othernums também muda. ISSO SO ACONTECE EM ARRAYS.
otherNums.pop();
console.log(nums);
