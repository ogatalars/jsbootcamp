fetch("https://swapi.co/api/planets/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");

      return response.json();
    }
  })
  .then((data) => {
    for (let planets of data.results) {
      console.log(planets.name);
    }
  })
  .catch((error) => {
    console.log(error);
  });
