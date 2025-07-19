import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root1234",
  database: "test",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello from the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM test.books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.description, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully!");
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081!");
});
