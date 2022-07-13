const ul = document.querySelector("section ul");
const removeMe = ul.querySelector(".special");
const deleted = ul.removeChild(removeMe);

// remove é mais simples que o removeChild

const h1 = document.querySelector("h1");
h1.remove(); // remove o h1
