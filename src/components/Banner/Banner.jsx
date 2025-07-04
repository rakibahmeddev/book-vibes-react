import React from 'react';
import bannerImage from '../../assets/books.jpg'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero bg-base-200  rounded-2xl my-4">
      <div className="hero-content py-16  px-10 flex-col lg:flex-row-reverse justify-between">
        <div>
            <img
          src={bannerImage}
          className="w-sm rounded-2xl shadow-2xl"
        />
        </div>
        <div className='md:w-[50%]'>
          <h1 className="text-2xl  md:text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
          <Link to='' className='bg-green-500 text-white rounded-lg px-6 py-3'>View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
