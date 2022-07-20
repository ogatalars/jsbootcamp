// Fetch API -> the newer way of making HTTP requests, supports promises, but not supported by all browsers
// example
fetch("https://icanhazdadjoke.com/23/2", {
  headers: { Accepted: "application/json" },
})
  .then((res) => {
    if (res.status !== 200) {
      console.log("Error: " + res.status);
      return;
    }
    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

fetch("https://swapi.co/api/planets/").then((response) => {
  console.log(response);
  response.json().then((data) => {
    console.log(data);
  });
});
