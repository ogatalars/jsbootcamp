const prices = [300.44, 1330.0, 5.0, 99.99, 10.75, 99.99, 12.0];
// prices.sort(); // it will sort the array in ascending order, but in strings
// There a big problem with this method, it will sort the strings in alphabetical order, so...
// the correct way is to use the compare function, or actually another point of view
// arr.sort(compareFunction(a, b))));
// if compareFunction(a, b) returns a number less than 0, then a is less than b.
// if compareFunction(a, b) returns a number greater than 0, then a is greater than b.
// if compareFunction(a, b) returns 0, then a is equal to b.

const ascSort = prices.sort((a, b) => {
  return a - b;
});

const descSort = prices.sort((a, b) => b - a);

// every time we use the sort method, we are creating a new array, so we can't use the same array, cause it gonna be sorted

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

books.sort((a, b) => b.rating - a.rating);
console.log(books);
