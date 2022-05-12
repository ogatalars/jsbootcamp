// strings are indexed, so each character has a corresponding index (a positional number)
// chicken = c = 0; h = 1; i = 2; c = 3; k = 4; e = 5; n = 6;
// length = 7 (tamanho dos caracteres)

let msg = "hello";
console.log(msg.length);
let mySong = "Surfing the netherlands";
console.log(mySong.length);

// para acessar o primeiro index do string, use o metodo .charAt() ou mySong[0]
console.log(mySong[0]);
console.log(mySong.charAt(0));
// array também usa esse metodo para achar o primeiro
// index de um caracter
console.log(mySong[3]); // quarto
// o indice começa do zero, isso significa que o primeiro index é 0 msg[0] = h

// Não conseguimos trocar o valor de um index, como no exemplo abaixo:
mySong[0] = "D";
console.log(mySong); // continua sendo "Surfing the netherlands"
