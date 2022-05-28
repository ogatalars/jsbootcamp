// The Return statement ends function exection AND specifies the value to be returned by that function
function square(x) {
  return x * x;
  console.log("All done");
}
square(x); // não vai imprimir 'all done'

function isPurle(color) {
  if (color === "purple") {
    return true;
  } else {
    return false;
  }
}
//  nem sempre um return é necessário, nesse caso acima há dois returns, pois há duas possibilidades
function isPurple(color) {
  return color.toLowerCase() === "purple";
}

function containsPurle(arr) {
  for (let color of arr) {
    if (color === "purple" || color === "magenta") {
      return true;
    }
  }
  return false;
}
// return pode interromper o for
