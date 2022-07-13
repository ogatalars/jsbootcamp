const btn = document.querySelector("clicker");
// addEventListener  specify the event type and a callback to run
// when the event is triggered
// É UM METODO DE OBJETO
// it is the best method to use dom events, cause has a lot of options.
const button = document.querySelector("#clicker");
button.addEventListener("click", () => {
  alert("you clicked me");
});
button.addEventListener("click", () => {
  console.log("you clicked me2");
});
button.addEventListener("mouseover", () => {
  button.innerText = "you hovered me";
});
button.addEventListener("mouseout", () => {
  button.innerText = "you mouseout me";
});

window.addEventListener("scroll", () => {
  console.log("you scrolled me");
});
