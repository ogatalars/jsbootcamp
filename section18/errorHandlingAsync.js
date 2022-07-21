async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.co/api/planets/");
    console.log(res.data); // only runs once the previous promise is resolved.
    // the axios promise is resolved)
  } catch (err) {
    console.log(err);
  }
}
// getPlanets().catch((err) => {
//   console.log(err);
// });
