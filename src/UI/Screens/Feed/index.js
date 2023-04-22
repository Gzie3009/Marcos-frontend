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
                      <div class="text-3xl font-bold">{val.name}</div>
                      <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                          {val.id}
                        </h1>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
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
                          <button class="inline-flex text-white bg-[#0057ff] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
                                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                              />
                            </svg>
                            <p className="ml-2">Like</p>
                          </button>
                          <a
                            target="_blank"
                            href={"https://linkedin.com/in/" + val.name}
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
