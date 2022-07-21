// The await keyword
// We can only use the await keyword inside of functions declared with async.
// await will pause the execution of the function, waiting for a promise to resolve.

async function hello() {
  return "Hey there!";
}
hello(); // promise {<resolved>: 'Hey there!'}
async function uhOh() {
  throw new Error("Uh oh!");
}
uhOh(); // promise {<rejected>: Error: Uh oh!}

// function getPlanetes() {
//     return axios.get("https://swapi.co/api/planets/");
// }

// gwtPlanetes().then(function(response) {
//     console.log(response.data.results);
// });
async function getPlanets() {
  const res = await axios.get("https://swapi.co/api/planets/");
  console.log(res.data);
}

// we do not need to use the .then() method to get the data.
