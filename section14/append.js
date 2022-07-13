const parentUl = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "New li";
parentUl.appendChild(newLi);
const firstLi = document.querySelector("li.todo");
parentUl.insertBefore(newLi, firstLi); // insert newLi before firstLi
let firstP = document.querySelector("p");
firstP.append(i, newLi); // append i to firstP
firstP.prepand(i, newLi); // prepend i to firstP
