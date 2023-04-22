import React, { useState } from "react";
import { useEffect } from "react";
const Feed = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await fetch("https://marcos-backend.onrender.com/users/post");
    const d1 = await res.json();
    if (d1) {
      setData(d1.post);
    }
  };
  useEffect(() => {
    fetchData();

  }, []);

  return (
    <>
      <div className="h-[100vh] px-48">
        <div className=" h-full overflow-y-auto">
          {data &&
            data.map((val, index) => {
              return (
                <>
                  <section key={index} class="text-gray-600 body-font p-10">
                    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col border border-[#0057ff] rounded-lg">
                    <img src={val.src} className="w-84"></img>
                      <div class="text-5xl font-bold">{val.name}</div>
                      <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
                          {val.title}
                        </h1>
                        <p
                          className="mb-8 leading-relaxed"
                          style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          {val.details}
                        </p>
                        <div class="flex justify-center">
                          <a
                            target="_blank"
                            href={val.link}
                            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                          >
                            <p className="mr-2">Connect</p>
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
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr className="border border-blue-400 my-8" />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Feed;
