// Spread in object literals -> copies properties from one object into another object literal.
const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Caninae", furry: true };
const dog = { ...canine, isPet: true, adorable: true };
const cat = {
  ...feline,
  isPet: true,
  adorable: true,
  personality: "mischievous",
};
const catDog = { ...cat, ...dog }; //keys are overwritten each other
// You cannot use spread de objetos para arrays, mas vice-versa é possivel.
