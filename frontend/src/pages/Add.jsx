import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Add = () => {
  const navigte = useNavigate();

  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8081/books", book);
      navigte("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Add new book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />

      <button onClick={handleClick}>Add!</button>
    </div>
  );
};

export default Add;
