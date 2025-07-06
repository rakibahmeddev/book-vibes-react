import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getReadList } from '../utility/addToDb';
import Book from '../Book/Book';
import ListStyle from '../ListStyle/ListStyle';


const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const getReadListdata = getReadList();
    const readList = getReadListdata.map((id) => parseInt(id));
    // console.log(getReadListdata, readList, allBooks);

    const readListBooks = allBooks.filter((book) => readList.includes(book.bookId));
    setBooks(readListBooks);

  }, []);

  console.log(books);

  
  return (
    <div>
      <h2 className="text-center text-4xl">Listed Books</h2>

      {/* name of each tab group should be unique */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
       

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-base font-medium "
          aria-label="Read List"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            books.map(book => <ListStyle book={book}></ListStyle>)
          }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-base font-medium "
          aria-label="Wishlist"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>My Wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
