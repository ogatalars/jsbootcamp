const city = "lisbon";
// city = "porto"; // não é possivel fazer isso com const;
// console.log(city); // erro
// VALUES CAN CHANGE, AS LONG AS THE REFERENCE REMAINS THE SAME, ou seja, podemos acrescentar novos elementos no array que usa const, entretanto não conseguimos, mudar para outro ponteiro.

const myEggs = ["Brown ", "Brown "];
myEggs.push("White");
console.log(myEggs);
