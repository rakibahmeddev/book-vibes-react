import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/public/booksData.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="text-center py-10">
      <h2 className="text-4xl text-center">Books</h2>
      <div className='text-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ga md:gap-x-0 lg:gap-x-16 md:gap-y-0'>
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
