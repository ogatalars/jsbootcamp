const btn = document.querySelector("button");
btn.addEventListener("mouseover", () => {
  console.log("mouseover");
  const h = Math.floor(Math.random() * window.innerHeight);
  const w = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${w}px`;
  btn.style.top = `${h}px`;
});

btn.addEventListener("click", () => {
  btn.innerText = "You clicked me!";
  document.body.style.backgroundColor = "red";
});
