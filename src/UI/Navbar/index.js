import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Homepage/favicon.png"
const Navbar = () => {
  return (
    <>
      <div className="px-14 bg-white w-screen fixed z-50">
        <div className="h-20 mt-2 w-full flex place-items-center">
          <div className="w-1/2 flex">
            <Link to="/" className="">
              <img src={logo} className="w-40"></img>
            </Link>
            <div className="w-2/3 place-items-center flex justify-center">
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
      <div className="h-20">|</div>
    </>
  );
};

export default Navbar;
