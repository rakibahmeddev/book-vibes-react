import React from 'react';
import { HiUsers } from 'react-icons/hi';
import { IoDocumentsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ListStyle = ({ book }) => {
  const {
    bookName,
    bookId,
    author,
    category,
    image,
    rating,
    tags,
    totalPages,
    publisher,
  } = book;
  return (
    <div>
      <div class="card card-side bg-base-100 shadow-sm rounded-2xl my-6">
        <figure className="bg-base-200 p-6 rounded-2xl">
          <img
            className="w-[134px] h-[166px] rounded-2xl"
            src={image}
            alt={bookName}
          />
        </figure>
        <div class=" text-left p-6">
          <h2 class="card-title">{bookName}</h2>
          <p className="text-base mt-4">
            By: <span className="text-sm ">{author}</span>
          </p>

          {/* Tags  */}
          <div>
            <div className="flex gap-2 my-4">
              <p>Tags</p>
              <div className="">
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className=" badge bg-[#F4FCF3] text-green-500 text-sm rounded-lg mx-2"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* publisher info  */}
          <div>
            <div className="flex justify-start items-center gap-x-10 mt-4">
              <div className="flex items-center gap-2">
                <HiUsers className="text-base" />
                <p className="text-base">
                  Publisher: <span className="text-sm">{publisher}</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoDocumentsOutline className="text-base" />
                <p className="text-base">
                  Page <span className="text-sm">{totalPages}</span>
                </p>
              </div>
            </div>
          </div>

          {/* divider  */}
          <div className="divider"></div>

          <div class="card-actions justify-start items-center">
            <div className="badge badge-soft badge-info p-4 rounded-full">
              <p className="text-base ">
                Category: <span className="text-sm">{category}</span>
              </p>
            </div>

            <div className="badge badge-soft badge-warning p-4 rounded-full">
              <p className="text-base ">
                Ratting: <span className="text-sm">{rating}</span>
              </p>
            </div>
            <div className=" p-4 rounded-full">
              <Link to={`/book/${bookId}`}>
                <button className="btn bg-green-500 text-white rounded-full font-medium text-base">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStyle;
