
const fs = require("fs");


const book = {
  id: 1,
  title: "Things Fall Apart",
  author: "Chinua Achebe",
  genre: "Fiction",
  year: 1958,
};
fs.writeFileSync("book.json", JSON.stringify(book, null, 2));


const savedBook = JSON.parse(fs.readFileSync("book.json", "utf8"));
console.log("--- Single book ---");
console.log(
  `#${savedBook.id}: "${savedBook.title}" by ${savedBook.author} (${savedBook.year}) [${savedBook.genre}]`
);

const books = [
  { id: 1, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Fiction", year: 1958 },
  { id: 2, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", genre: "Historical", year: 2006 },
  { id: 3, title: "Fikir Eske Mekabir", author: "Haddis Alemayehu", genre: "Fiction", year: 1966 },
  { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", year: 1988 },
  { id: 5, title: "Sapiens", author: "Yuval Noah Harari", genre: "History", year: 2011 },
  { id: 6, title: "Americanah", author: "Chimamanda Ngozi Adichie", genre: "Fiction", year: 2013 },
];
fs.writeFileSync("books.json", JSON.stringify(books, null, 2));


const savedBooks = JSON.parse(fs.readFileSync("books.json", "utf8"));
console.log("\n--- All books ---");
console.log(`There are ${savedBooks.length} books.`);
savedBooks.forEach((b) => {
  console.log(`#${b.id}: "${b.title}" by ${b.author} (${b.year}) [${b.genre}]`);
});
