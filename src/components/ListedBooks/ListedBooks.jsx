import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getReadList } from '../utility/addToDb';
import { getWhishlist } from '../utility/addToDb';
import Book from '../Book/Book';
import ListStyle from '../ListStyle/ListStyle';
import ListStyleWishlist from '../ListStyle/ListStyleWishlist';



const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const getReadListdata = getReadList();
    const readList = getReadListdata.map((id) => parseInt(id));
    // console.log(getReadListdata, readList, allBooks);

    const readListBooks = allBooks.filter((book) => readList.includes(book.bookId));
    setBooks(readListBooks);

  }, []);

//   console.log(books);

//   for wishlist 
    useEffect(() => {
        const getWishlist = getWhishlist();
        const wishlist = getWishlist.map(id => parseInt(id));
        // console.log(getWishlist, wishlist, allBooks);
    
        const wishlistBooks = allBooks.filter((book) => wishlist.includes(book.bookId));
        console.log(wishlistBooks);
        setWishlist(wishlistBooks);
    
    }, []);


  
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
            books.map(book => <ListStyle key={book.bookId} book={book}></ListStyle>)
          } 

          
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-base font-medium "
          aria-label="Wishlist"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            wishlist.map(book => <ListStyleWishlist key={book.bookId} book={book}></ListStyleWishlist>
            
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
