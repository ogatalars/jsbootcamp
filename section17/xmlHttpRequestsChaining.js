const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("it worked!");
  const data = JSON.parse(this.responseText);
  const filmeUrl = data.results[0].films[0];
  const filmeReq = new XMLHttpRequest();
  filmeReq.addEventListener("error", function (e) {
    console.log(e);
  });
  filmeReq.open("GET", filmeUrl);
  filmeReq.send();
});

firstReq.addEventListener("error", () => {
  console.log("it didn't work");
});

firstReq.open("get", "https://swapi.co/api/people/1/");
firstReq.send();
console.log("request sent");

// very messy.
