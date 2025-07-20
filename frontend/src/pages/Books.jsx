import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8081/books");
        setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Book Store</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <h2>{book.description}</h2>
            <h2>{book.price}</h2>
            <button className="delete">Delete</button>
            <button className="update">Update</button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book!</Link>
      </button>
    </div>
  );
};

export default Books;
