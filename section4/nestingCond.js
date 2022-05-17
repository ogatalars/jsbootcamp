// We can nest conditionals inside conditionals
let password = "swordfish";
if (password.length >= 6) {
  if (password.indexOf("") === -1) {
    console.log("Password is valid");
  } else {
    console.log("Password is not valid");
  }
} else {
  console.log("Password is too short");
}
