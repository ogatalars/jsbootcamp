// == equality
// Checks for equality of value, but not equality of type. It coerces both values ot the same type and them compares them. This can lead to some unexpected results!
console.log(4 == 4); // true
console.log(4 == "4"); // true
console.log(0 == ""); // true
console.log(false == false); // true
console.log(null == undefined); // true
