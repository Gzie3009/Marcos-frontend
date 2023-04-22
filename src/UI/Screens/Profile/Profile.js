import React, { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const name=localStorage.getItem("name")
  const email=localStorage.getItem("email")
  return (
    <>
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
      </section>
    </>
  );
};

export default Profile;
