// accepts a callback funcion. Calls the funcion once per element in the array.
const nums = [9, 8, 5, 1, 2, 3, 5, 7, 8, 9, 10];
nums.forEach(function (num) {
  console.log(num);
});
console.log("==========================================================");
nums.forEach(function (num) {
  console.log(num * num);
});
console.log("----------------\n");
nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", published: 1937 },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    published: 1954,
  },
  { title: "The Two Towers", author: "J.R.R. Tolkien", published: 1937 },
  {
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    published: 1955,
  },
  { title: "The Silmarillion", author: "J.R.R. Tolkien", published: 1977 },
];

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});
