// similar to destructuring arrays
const runner = {
  first: "John",
  last: "Doe",
  country: "USA",
  age: 30,
  title: "Developer",
};
const { first, last, country, age, title } = runner;
console.log(
  `${first} ${last} is ${age} years old and lives in ${country}. He is a ${title}.`
);
console.log(`Essa é a veriavel first ${first}`);

// ordem não importa
const { country: nation } = runner;
console.log(nation);
const { age: years } = runner;
console.log(years);
// years = runner.age;
