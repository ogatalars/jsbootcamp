let nums = [1, 2, 3];
let mystery = [1, 2, 3];

console.log(nums === mystery); // false
console.log(nums == mystery); // false
// quando comparamos as duas variaveis na verdade estamos comparando o endereço de memória, e ai é por esse motivo que dá false. Porque a referência da memória é diferente.
console.log([] === []); // false
// Uma array vazia é diferente de outra array vazia pelo fato de serem referências na memoria diferentes.

// example
const user = {
  username: "CherryGracia",
  email: "garcia@gmail.com",
  notifications: [],
};
if (!user.notifications.length) {
  console.log("No new notifications");
}
// object e arrays trabalham da mesma maneira
