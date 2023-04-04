import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [toogler, setToggler] = useState(false);
  return (
    <div>
      <div className="flex bg-slate-500 p-2 md:p-4 justify-between">
        <div>
          <Link to="/">
            <h1 className="text-2xl">nextPage</h1>
          </Link>
        </div>
        <div className=" p-2 absolute right-[calc(100vh-88vh)]">
          <Bars3Icon
            onClick={() => setToggler(!toogler)}
            className="h-6 w-6  visible  md:invisible"
          ></Bars3Icon>
        </div>
        <div className="invisible md:visible   flex gap-4">
          <Link to="/">
            <h1 className="text-xl">Home</h1>
          </Link>
          <Link to="/">
            <h1 className="text-xl">Book</h1>
          </Link>
          <Link to="/">
            <h1 className="text-xl">About Us</h1>
          </Link>
        </div>
      </div>
      {toogler ? <div className=" flex flex-col gap-4">
          <Link to="/">
            <h1 className="text-xl">Home</h1>
          </Link>
          <Link to="/">
            <h1 className="text-xl">Book</h1>
          </Link>
          <Link to="/">
            <h1 className="text-xl">About Us</h1>
          </Link>
        </div> : ""}
    </div>
  );
};

export default Nav;
