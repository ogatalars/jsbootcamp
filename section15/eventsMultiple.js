// colocando listeners em varios eventos, como click, mouseover, etc
const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
const printColor = function () {
  console.log(box.style.backgroundColor);
  console.log(this.style.backgroundColor);
};

const container = document.querySelector("#container");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", () => {
    printColor(box);
  });
}
