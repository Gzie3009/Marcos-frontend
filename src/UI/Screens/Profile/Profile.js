import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [load,setLoad]=useState(1)
    useEffect(() => {
      setTimeout(()=>{
        setLoad(0)
      },1000)
    }, [])
  const name=localStorage.getItem("name")
  const email=localStorage.getItem("email")
  return (
    <>{load?<><div className="w-screen h-[72vh] grid place-items-center">
    <div role="status">
      <svg
        aria-hidden="true"
        class="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div></>:<>
      <div class="container mx-auto my-10 mb-30">
        <h1 class="pb-10 font-bold text-center text-3xl text-blue-600">
          Welcome{" "}
        </h1>
        <div class="mt-20">
          <div class="relative shadow-lg shadow-blue-600/50 rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div class="flex justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>
            <div class="mt-16">
              <h1 class="font-bold text-center text-3xl text-blue-600">
                {name}
              </h1>
              <p class="mt-2 pb-20 text-center text-sm text-blue-800 font-medium">
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font w-full grid place-items-center">
        <div class=" px-5 py-24">
          <div class="text-center mb-5">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-blue-600">
              Want to host an Event?
            </h1>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <Link to={"/profile/form"}>
                <div class="w-[11vw] bg-gray-100 text-blue-700 rounded flex p-4 h-full items-center hover:bg-blue-700 hover:text-white">
                  <span class="title-font font-medium text-center flex">
                  <div>Contact Us</div>
                    
                    <div className="ml-3">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    </div>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section></>}
    </>
  );
};

export default Profile;
