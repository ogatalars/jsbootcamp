// keydown event -> runs when a key is pressed
const input = document.querySelector("input");
input.addEventListener("keydown", () => {
  console.log("keydown");
});

// keyup -> runs when the key is released
input.addEventListener("keyup", () => {
  console.log("keyup");
});

// keypress -> runs when a key is pressed and released
input.addEventListener("keypress", () => {
  console.log("keypress");
});
//very useful for gaming purposes

const addItemInput = document.querySelector("#add-item-input");
const itemsUL = document.querySelector("#items");
addItemInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const newItem = document.createElement("li");
    newItem.textContent = addItemInput.value;
    itemsUL.appendChild(newItem);
    addItemInput.value = "";
  }
});
