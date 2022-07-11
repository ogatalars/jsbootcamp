// querySelector is a newer, all-in-one method for finding elements in the DOM. It's a lot more powerful than the old getElementById and getElementsByTagName.

document.querySelector("hi");
// returns the first element with the class "hi"

document.querySelector("#red");
// returns the first element with the id "red"

document.querySelector(".big");
// returns the first element with the class "big"

document.querySelectorAll(".big");
// returns a NodeList of all elements with the class "big" (ALL elements with the class "big")
