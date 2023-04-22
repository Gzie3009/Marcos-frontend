import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Homepage/favicon.png";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../store/slice/userSlice";
import { toast } from 'react-toastify';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let dx = useSelector((state) => {
    return state.users["auth"];
  });
  const inifetch = () => {
    const jwt = localStorage.getItem("JWT");
    if (jwt) {
      dispatch(loginUser());
    }
  };
  const email=localStorage.getItem("email")
  const handleLogout = () => {
    localStorage.removeItem("JWT")
    localStorage.removeItem("email")
    localStorage.removeItem("name")
    dispatch(logoutUser());
    toast.success("Logout Successfull")
    navigate("/");
  };

  useEffect(() => {
    inifetch();
  }, []);

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
                <>
                  <Link className="px-5" to={"/alumni"}>
                    Alumni
                  </Link>
                  <Link className="px-5" to={"/oppourtunity"}>
                    Opportunities
                  </Link>
                  <Link className="px-5" to={"/webinars"}>
                    Webinars
                  </Link>
                  {dx && email!=="Admin@gmail.com"?<Link className="px-5" to={"/profile"}>
                    Profile
                  </Link>:null}
                  {email==="Admin@gmail.com"?<Link className="px-5" to={"/app/fullaccess/admin"}>
                    Dashboard
                  </Link>:null}
                  
                </>
            </div>
          </div>
          <div className="w-1/2 flex px-10">
            <div className="flex w-full justify-end">
              {dx ? (
                <>
                  <Link
                    onClick={handleLogout}
                    className="bg-[#0057FF] w-1/4 p-4 text-white rounded-lg hover:bg-indigo-600 text-center flex justify-between"
                  >
                  <p>Logout</p>
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </Link>
                </>
              ) : (
                <Link
                  to={"/register"}
                  className="bg-[#0057FF] w-1/3 p-4 text-white rounded-lg hover:bg-indigo-600 text-center"
                >
                  Login / Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-20">|</div>
    </>
  );
};

export default Navbar;
