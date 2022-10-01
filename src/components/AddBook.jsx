/* eslint-disable */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addedBook } from "../redux/books/books";

const AddBook = () => {
  const dispatch = useDispatch();
  const [initState, setState] = useState({ title: "", author: "" });
  const changeState = (e) => {
    e.preventDefault();
    setState({ ...initState, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!initState.title.trim() || !initState.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: initState.title,
      author: initState.author,
    };
    dispatch(addedBook(book));
    setState({ title: "", author: "" });
  };
  return (
    <div>
      <form onSubmit={bookState}>
        <input
          type="text"
          placeholder="title"
          value={initState.title}
          onChange={changeState}
          name="title"
        />
        <input
          type="text"
          placeholder="author"
          value={initState.author}
          onChange={changeState}
          name="author"
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
