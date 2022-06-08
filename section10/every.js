// every => Tests wheter all elements in the array pass the provided function. It returns a Boolean value. It is a boolean method

const words = ["dog", "dig", "log", "bag", "wag"];
words.every((word) => {
  return word.length === 3;
}); // true

words.every((word) => {
  return word[0] === "d";
}); // false
