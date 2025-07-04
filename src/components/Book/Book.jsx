import React from 'react';
import { IoIosStarOutline } from "react-icons/io";

const Book = ({ book }) => {
  const { bookId, bookName, author, category, image, rating, tags } = book;
  console.log(book, bookId);

  return (
    <div className="mt-6">
      <div className="card bg-base-100 w-96 shadow-lg p-6 border-2 border-[#DCDCDC] rounded-2xl">
        <div className="bg-base-200 py-8 rounded-2xl">
          <figure>
            <img className="w-[134px] h-[166px]" src={image} alt={bookName} />
          </figure>
        </div>
        <div className="card-body text-left p-0 mt-6">
          <div>
            <div>
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="badge bg-[#F4FCF3] text-green-500 text-sm mx-1 rounded-lg"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="text-sm">By: {author}</p>
          <div className="border-b-2 border-[#DCDCDC] border-dashed my-4"></div>
          <div className="card-actions justify-between">
            <div>
              <p>{category}</p>
            </div>
            <div className='flex items-center gap-1'>
              <p className='text-sm'>{rating}</p>
              <IoIosStarOutline className='text-lg'></IoIosStarOutline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
