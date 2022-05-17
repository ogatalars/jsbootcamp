// Ternario é um shortcut para condição
// condition ? expression If True: expression If False
let num = 7;
if (num === 8) {
  console.log("num is 8");
} else {
  console.log("num is not 8");
}

num === 8 ? console.log("num is 8") : console.log("num is not 8");

let status = "offline";
let color = status === "online" ? "green" : "red";
