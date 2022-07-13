const h1 = getComputedStyles(h1);
// normalmente nao usamos o getComputedStyles, pois ele nao retorna o valor do style, e os styles ficam no css e so conseguem captar os styles que sao feitos inline
// mas com o getComputedStyles, podemos captar o valor do style
const p = querySelector("p");
p.styles.backgroundColor = "black";
// quando fzmos dessa maneira, acrescentamos um style inline, e o css nao consegue captar

const allLis = document.querySelector("li");
const colors = ["red", "green", "blue", "green", "yellow", "orange", "purple"];

allLis.forEach((el, i) => {
  const color = colors[i];
  console.log(el, i);
});
