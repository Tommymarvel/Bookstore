/* eslint-disable */
import React from "react";
import styles from "./Books.module.css";
import { useDispatch } from "react-redux";
import { removedBook } from "../redux/books/books";

const Books = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const removeBooks = () => {
    dispatch(removedBook(id));
  };
  return (
    <div>
      <div className="{style.book}">
        <div className="{styles.description}">
          <p>{title}</p>
          <p>{author}</p>
          <button type="button" onClick={removeBooks}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
