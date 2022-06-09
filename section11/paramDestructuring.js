// Param destructuring

// const fullName = (first, last) => {
//   return `${first} ${last}`;
// }

const runner = {
  first: "John",
  last: "Doe",
  country: "USA",
  title: "Elder of the order of the golden heart of usa",
};
// one way to do
// function print(person) {
//   const { first, last, title } = person;
//   console.log(console.log(`${first} ${(last, { title })}`));
// }

// destructuring params

function print({ first, last, title }) {
  console.log(first, last, title);
}
print();

const response = ["hhtp/1.1", "200", "app/json"];

// function parseResponse(response) {
//   const [protocol, statusCode, contentType] = response;
//   console.log(protocol, statusCode, contentType);
// }

// or
function parseResponse([protocol, statusCode, contentType]) {
  console.log(protocol, statusCode, contentType);
}
