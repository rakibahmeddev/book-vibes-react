import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100  '>
            <h2 className='text-center text-7xl font-bold'>404</h2>
            <p className='text-center text-2xl'>Page not found!</p>
            <Link to='/'><button className='bg-green-400 text-white px-10 py-3 rounded-lg my-6'>Home</button></Link>
        </div>
    );
};

export default ErrorPage;