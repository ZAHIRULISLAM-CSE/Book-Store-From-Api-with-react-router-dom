import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const Books = () => {
    const data=useLoaderData();
    const bookData=data.books;
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4' >
            {
                bookData.map( oneBook => <SingleBook key={oneBook.isbn13} data={oneBook}  ></SingleBook>)
            }
        </div>
    );
};

export default Books;