import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="px-14">
        <div className="h-20 w-full flex place-items-center">
          <div className="w-1/2 flex">
            <div className="w-1/3 ">
              <Link to="/">Logo</Link>
            </div>
            <div className="w-2/3  flex justify-center">
              <Link className="px-5" to="/">
                Home
              </Link>
              <Link className="px-5" to={"/alumni"}>
                Alumni
              </Link>
              <Link className="px-5" to={"/oppourtunity"}>
                Oppourtunity
              </Link>
              <Link className="px-5" to={"/webinars"}>
                Webinars
              </Link>
              <Link className="px-5" to={"/profile"}>
                Profile
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex px-10">
            <div className="flex w-full justify-end">
              <Link to={"/register"} className="bg-[#0057FF] w-1/3 p-4 text-white rounded-lg hover:bg-indigo-600">Login / Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
