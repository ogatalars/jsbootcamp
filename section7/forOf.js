// // A nice and easy way of iterating over arrays(or other iterable objects)
// for(variable of iterable){
//     statement
// }
let subreddits = ["soccer", "baseball", "basketball", "football", "hockey"];

for (sports of subreddits) {
  console.log(sports);
}
// Printa todos os valores do array
// Pode ser usado para iterar os elementos de uma string também.
for (let char of "AAAAAAAAAhuaehuaehueaheuheuea") {
  console.log(char);
}
// há algumas razões de as vezes não usarmos o for..of
const magiSquare = [
  [2, 6, 8],
  [1, 5, 9],
  [4, 7, 3],
];
for (let row of magiSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`The sum of the row is ${sum}`);
}

// nao usar quando:
const words1 = ["hello", "world", "this", "is"];
const words2 = ["box", "shake", "pizza", "tub"];
// quando precisamos saber o indice de um elemento, não é legal usar o for of
