// to run JavaScript code right inside VS code, without us having to connect this script with some HTML file, click 'shift + command + p' to open the search bar and search for 'Quokka.js: Start on current file'. It will open the OUTPUT panel and activate the tool wallaby on the activity panel, on the left of your VS Code.

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
books;

const book = getBook(2);
book; //returns book 2

// Destructuring objects
const {
  title,
  author,
  genres,
  publicationDate,
  pages,
  hasMovieAdaptation,
  translations,
} = book;

// Destructuring arrays
//const [firstGenre, secondGenre] = genres;

// Rest element (...)
// const [firstGenre, secondGenre, ...otherGenres] = genres;
// console.log(title, author, firstGenre, secondGenre, otherGenres);
// 'The Cyberiad Stanislaw Lem science fiction humor [ \'speculative fiction\', \'short stories\', \'fantasy\' ]'

// skipping the secondGenre and adding a rest element
const [firstGenre, , thirdGenre, ...otherGenres] = genres;
console.log(otherGenres);
// ['short stories', 'fantasy']

// spread operator with arrays
const newGenres = [...genres, "epic fiction"];
console.log(newGenres);
// [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy', 'epic fiction' ]

// spread operator with objects
const book1 = getBook(1);
book1;

const updatedBook1 = {
  ...book1,
  movieReleasedDate: "2001-12-19",
  pages: 500,
};

updatedBook1;

const summary = `${title} is a book published in ${
  publicationDate.split("-")[0]
}.`;
summary;
// 'The Cyberiad is a book published in 1965.`

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";

console.log(pagesRange);
// 'less than 1000'

console.log(
  `The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`,
);
// The book has not been adapted as a movie.

// old way of writing functions / still used for long functions. Need to write the 'return' word
function getMonth(str) {
  return str.split("-")[1];
}
console.log(getMonth(publicationDate)); // 01

// arrow function is the new way of writing short functions / implicit return
// automatically returns whatever is on the right side of the arrow =>
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate)); // 1965

console.log(pages && hasMovieAdaptation);
// false (if book id 2)
// true (if book id 1)

console.log(hasMovieAdaptation && pages);
console.log(pages && hasMovieAdaptation);
// falsy values:
console.log(0 && pages);
console.log({} && pages);

// truthy values:
console.log(23 && pages);
console.log("false" && pages);

// short-circuiting with OR
console.log(pages || hasMovieAdaptation); // 1216 (with book id 1)
console.log(hasMovieAdaptation || pages); // true (with book id 1)

const spanishTranslation = book.translations.spanish || "Not translated";
console.log(spanishTranslation);

const countWrongReviews = book.reviews.librarything.reviewsCount || "No data";
console.log(countWrongReviews);

// short-circuiting with Nullish coalescing operator
const countReviews = book.reviews.librarything.reviewsCount ?? "No data";
console.log(countReviews);
