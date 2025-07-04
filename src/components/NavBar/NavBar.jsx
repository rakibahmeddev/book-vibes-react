import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const links = <>
        <NavLink to = '/' className='text-base mx-2'>Home</NavLink>
        <NavLink to = '/books' className='text-base mx-2'>Listed Books</NavLink>
        <NavLink to = '/read' className='text-base mx-2'>Pages to Read</NavLink>
        <NavLink to = '/dashboard' className='text-base mx-2'>Dashboard</NavLink>
        
    </>
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
            {links}


          </ul>
        </div>
        <Link to="/" className="text-2xl font-medium">
          Book Vibes
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to=""
          className="bg-green-500 px-6 py-2 rounded-lg text-white mx-2"
        >
          Sign In
        </Link>
        <Link
          to=""
          className="bg-cyan-500 px-6 py-2 rounded-lg text-white mx-2"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
