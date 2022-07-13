const newh2 = document.createElement("h2"); // create a new element
newh2.innerHTML = "New h2"; // add content to the element
newh2.classList.add("special"); // add a class to the element
const section = document.querySelector("section"); // get the section element
section.appendChild(newh2); // add the new element to the section

const newImg = document.createElement("img"); // create a new element
newImg.src = "https://picsum.photos/200/300"; // add content to the element
newImg.style.width = "200px"; // add a class to the element
document.body.appendChild(newImg); // add the new element to the body

const newLink = document.createElement("a"); // create a new element
newLink.innerText = "New link"; // add content to the element
newLink.href = "https://www.google.com"; // add content to the element
const firstP = document.querySelector("p"); // get the first paragraph
firstP.appendChild(newLink); // add the new element to the paragraph
