// nested functions
function outer() {
  let hero = "Black Panther";
  function inner() {
    let cryForHelp = `${hero} is on fire!`;
    console.log(cryForHelp);
  }
  inner();
}
outer();
// inner(); // inner() is not defined

// Se não tiver o inner for da função, não volta nada, pois não temos escopo dela
