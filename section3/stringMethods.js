// Strings come wih a set of built-in methods, which are actions that can be performed on strings.
// We can don things like Searching within a string; Replacing parts of a string; Changing case(upper to lower)
// and much more.
// thing.method()

let msg = "You are so beutiful";
msg.toUpperCase();
console.log(msg); // continua igual
msg = msg.toUpperCase(); // muda para maiusculo
console.log(msg);
// muito importante o ()
let color = "             blue ";
color = color.trim();
console.log(color);
// color = color.trim().toUpperCase()

// other methods, but with arguments
// thing.method(arg) -> Some methods accept arguments that modify their behavior. We pass these arguments inside of the parentheses.

//indexOf

let tvShow = "catdog";
tvShow.indexOf("dog"); // 3
tvShow.indexOf("ELEFANTE"); // -1 porque não existe

//Slice

let str = "supercalifragilisticexpialidocious";
console.log(str.slice(0, 5)); // 'super'
// sempre é preciso salvar em uma nova variavel
let hero = "SuperHero";
let hero2 = hero.slice(0, 5); // 'Super'
let hero3 = hero.slice(5); //
console.log(hero3);

// replace

let something = "I am a super hero";
something = something.replace("super", "super-duper");
console.log(something);
