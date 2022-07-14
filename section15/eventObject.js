const changeColor = function (evt) {
  evt.target.style.backgroundColor = "red"; // target é o elemento que disparou o evento
  h1.style.color = this.style.backgroundColor;
};
document.body.addEventListener("keypress", function (e) {
  console.log(e.key);
});
