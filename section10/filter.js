// creates a new array with all elements that pass the test implemented by the provided function.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = nums.filter((n) => {
  return n % 2 !== 0;
});
console.log(odds);

const smallNumbers = nums.filter((n) => {
  return n <= 5;
});
const bigNums = nums.filter((n) => {
  return n > 5;
});

const books = [
  {
    title: "The Hobbit",
    genre: ["Fantasy", "Children"],
    rating: 4.6,
    authors: ["J.R.R. Tolkien"],
  },
  {
    title: "The Lord of the Rings",
    genre: ["Fantasy", "Children"],
    rating: 4.1,
    authors: ["J.R.R. Tolkien"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    genre: ["Fantasy", "fiction "],
    rating: 4.5,
  },
  {
    title: "The Catcher in the Rye",
    authors: ["J.D. Salinger"],
    genre: ["Fiction", "Romance"],
    rating: 4.5,
  },
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    genre: ["Fiction", "Romance"],
    rating: 4.8,
  },
  {
    title: "The Grapes of Wrath",
    authors: ["John Steinbeck"],
    genre: ["Drama", "Romance", "Fiction"],
    rating: 4.4,
  },
  {
    title: "Socrates in the Republic",
    authors: ["Plato"],
    genre: ["Philosophy", "Drama"],
    rating: 4.5,
  },
  {
    title: "Zaratrust",
    authors: ["Nietzsche"],
    genre: ["Philosophy", "Drama"],
    rating: 4.5,
  },
  {
    title: "The Republic",
    authors: ["Plato"],
    genre: ["Philosophy", "Drama"],
    rating: 4.9,
  },
  {
    title: "Communist Manifest",
    authors: "Marx",
    genre: ["Philosophy", "Sociology"],
    rating: 3.6,
  },
  {
    title: "A gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.35,
    genre: ["Drama", "Fiction"],
  },
];

const goodBoosks = books.filter((book) => {
  book.rating >= 4.5;
});
const fantasyBooks = books.filter((book) => book.genre.includes("Fantasy"));
const Philosophy = books.filter((book) => book.genre.includes("Philosophy"));
