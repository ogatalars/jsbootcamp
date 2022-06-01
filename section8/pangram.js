// A pangram is a sentence that contains every letter of the alphabet at least once, like "The quick brown fox jumps over the lazy dog".
// write a function called isPangram, which checks to see if a given string is a pangram. Make sure you ignore string casing!

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let stringLower = string.toLowerCase();
  let stringArray = stringLower.split("");
  console.log(stringArray);
  for (let i = 0; i < alphabet.length; i++) {
    if (stringArray.indexOf(alphabet[i]) === -1) {
      return "its not a pangram";
    } else {
      return "is a Pangram";
    }
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram"));

//another way
function ehPangram(sentence) {
  for (let caractere of "abcdefghijklmnopqrstuvwxyz") {
    if (sentence.toLowerCase().indexOf(caractere) === -1) return false;
  }
  return true;
}

function ehPangram2(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lowerCased.includes(char)) return false;
  }
  return true;
}
