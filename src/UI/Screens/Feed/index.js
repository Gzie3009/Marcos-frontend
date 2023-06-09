import React, { useState } from "react";
import { useEffect } from "react";
const Feed = () => {
  const [load, setLoad] = useState(1);
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await fetch("https://marcos-backend.onrender.com/users/post");
    const d1 = await res.json();
    if (d1) {
      setData(d1.post);
      setLoad(0);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {load ? (
        <div className="w-screen h-[72vh] grid place-items-center">
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
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Feed;
