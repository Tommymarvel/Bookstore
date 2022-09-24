/* eslint-disable */
import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbet',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
