// the thing -> event type -> the code to run
// Button -> click -> change the color
// input -> hits return -> get search results
// image -> mouseover -> display the img caption

//1 primeira forma de adicionar um evento -> ruim
// podemos usar o javascript no proprio HTML. Nao recomendado.
// <button onlick="alert("you change me")">Cick Me!</button>
// <input type="text" onkeypress="alert('you hit return')">
// <button mouseover="alert('you mouseover me')">Mouseover Me!</button>

//2 segunda forma de adicionar um evento ->  melhor, mas ainda nao é a melhor
// <button id="button">Cick Me!</button>
//Separamos o evento do codigo que vai executar o evento. Ainda sim, nao é a melhor forma.
const btn = document.querySelector("#clicker");
btn.onclick = alert("you change me"); // nao funciona direito.
btn.onclick = function () {
  console.log("you change me");
}; // funciona direito, mas nao é a melhor. Mas sempre usar a funcao se for o caso.
