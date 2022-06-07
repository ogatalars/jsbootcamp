// creates a new array with the results of calling a callback on every element in the array.
// a diferença em relação ao map, é que no caso do Map, ele cria um array novo
// é muito importante usar return no map

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});
console.log(caps);
console.log(texts);

const numbers = [20, 30, 123, 45, 67, 89, 90];
const doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});
console.log(numDetail);

const words = ["Hello", "World", "in", "a", "frame"];

const abrrevs = words.map(function (word) {
  return word.toUpperCase().split("").join("-");
});
console.log(abrrevs);
