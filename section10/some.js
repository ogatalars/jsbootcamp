// some -> Similar to every, but returns true if any of the array elements pass the test function
const words = ["hello", "world", "this", "is", "a", "string"];
// Are there any words longer than 4 characters?
const some = words.some((word) => {
  return word.length > 4;
}); // true
