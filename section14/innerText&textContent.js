// Now is time to manipulate the DOM. After we selecet using the document.querySelector() method, we can use the innerText and textContent properties to manipulate the text.
const h1 = document.querySelector("h1");

console.log(h1.innerText); // vai mostrar o que tem no h1 (o texto, isso é, o primeiro somente)
const ul = document.querySelector("ul");
console.log(ul.innerText); // vai mostrar o que tem no ul (o texto, isso é, o primeiro somente)
document.body.innerText; // vai MOSTRAR TODO O TEXTO

h1.innerText = "Ola mundo"; // vai alterar o texto do h1
ul.innerText = "eu sou um texto"; // vai alterar o texto do ul

// textContent é outra maneira de selecionar o texto e tambem mudar

h1.textContent = "eu estou com fome"; // vai alterar o texto do h1
// textContent vai no DOCUMENTO BODY, no HTML porque vai pegar todo o texto do documento enquanto  que o innerText so vai para a pagina.
