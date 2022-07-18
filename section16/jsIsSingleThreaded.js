// what does that mean? It means that at any given point in time, that single JS thread is running at most one line of js code.
console.log("I happend first");
window.alert("I happen second");
console.log("I happen third");
console.log("I happen fourth");
window.alert("I happen fifth");
// vai parar no alert("I happen second")
