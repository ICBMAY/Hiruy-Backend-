
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Books are read from an array in the code
const books = [
  { id: 1, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Fiction", year: 1958 },
  { id: 2, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", genre: "Historical", year: 2006 },
  { id: 3, title: "Fikir Eske Mekabir", author: "Haddis Alemayehu", genre: "Fiction", year: 1966 },
  { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", year: 1988 },
  { id: 5, title: "Sapiens", author: "Yuval Noah Harari", genre: "History", year: 2011 },
  { id: 6, title: "Americanah", author: "Chimamanda Ngozi Adichie", genre: "Fiction", year: 2013 },
];

// GET /  -> welcome text
app.get("/", (req, res) => {
  res.send("Welcome to the Books API");
});


app.get("/books/count", (req, res) => {
  res.json({ count: books.length });
});


app.get("/books", (req, res) => {
  const { genre, author } = req.query;
  let result = books;

  if (genre) {
    result = result.filter((b) => b.genre.toLowerCase() === String(genre).toLowerCase());
  }
  if (author) {
    result = result.filter((b) => b.author.toLowerCase().includes(String(author).toLowerCase()));
  }
  res.json(result); // [] when nothing matches
});

// GET /books/:id -> one book, or 404
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Books API running at http://localhost:${PORT}`);
});
