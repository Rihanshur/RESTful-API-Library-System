// app/books/updateBookDetails.js
const express = require("express");
const mysql = require("mysql2/promise");

const router = express.Router();

const dbConfig = {
  host: "localhost",
  user: "your_mysql_user",
  password: "your_mysql_password",
  database: "library",
};

router.put("/api/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;

  // Validate request payload
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: "Invalid request payload" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      "UPDATE books SET title=?, author=?, publishedYear=? WHERE id=?",
      [title, author, publishedYear, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    connection.end();
    res.json({ id, title, author, publishedYear });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
