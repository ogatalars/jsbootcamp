// All values have an inherent truthy or falsy boolean values.
// Falsy values: false, 0 , "", null, undefined, NaN
// everythin is truthy except for the falsy values

let mystery = 5;
if (mystery) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

mystery = 0;
if (mystery) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

let loggedInUser = null;
if (loggedInUser) {
  console.log("Welcome");
} else {
  console.log("Please log in");
}
