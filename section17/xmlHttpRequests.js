// xml http request - the original way of sending requests via JS
// does not support promises, so lots of callbacks
// wtf is going on with the weird capitalization?
// clunky syntax that i find difficult to read and understand/remember

const myReq = new XMLHttpRequest(); // create a new XMLHttpRequest object
myReq.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};
myReq.onerror = function (err) {
  console.log(err);
};

myReq.open("GET", "https://api.github.com/users/matthew-andrews", true);
myReq.setRequestHeader("Content-Type", "application/json");
myReq.send();

const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("it worked!");
  console.log(firstReq.responseText);
  const json = JSON.parse(this.responseText);
  console.log(json);
  console.log(this.responseText); // this is the same as firstReq.responseText, but we use arrow functions, so this its not going to work
});
firstReq.open("get", "https//swapi.co/api/people/1/");
firstReq.send();
console.log("request sent");
