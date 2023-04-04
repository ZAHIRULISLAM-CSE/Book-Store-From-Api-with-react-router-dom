import React from "react";
import { Link } from "react-router-dom";

const SingleBook = (props) => {
  const { image, title, subtitle, price,isbn13 } = props.data;
  return (
    <Link to={`/books/${isbn13}`}>
      <div className="relative transition duration-200 transform hover:-translate-y-2 mt-6 lg:mt-8">
        <img className="object-cover w-full h-56" src={image} alt="" />
        <div className="absolute flex justify-between flex-col p-4 text-white  hover:opacity-100 opacity-0 bg-black bg-opacity-75 inset-0">
          <p>{title}</p>
          <p>{subtitle}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
