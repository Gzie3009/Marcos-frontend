import React, { useState, useEffect } from "react";
import alumni1 from "../../../Assets/Alumni/Alumni1.jpeg";
import alumni2 from "../../../Assets/Alumni/Alumni2.jpeg";
import alumni3 from "../../../Assets/Alumni/Alumni3.jpeg";
import alumni4 from "../../../Assets/Alumni/Alumni4.jpeg";
const Alumni = () => {
  const [load, setLoad] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setLoad(0);
    }, 1000);
  }, []);

  const data = [
    {
      name: "Harsh Choudhury",
      desg: "Software Engineer",
      email: "immharshchoudhary@gmail.com",
      lin: "https://www.linkedin.com/in/harsh-choudhary-974296228/",
      image: alumni1,
    },
    {
      name: "Avishek Golder",
      desg: "SDE 4",
      email: "abhishekgolder@gmail.com",
      lin: "https://www.linkedin.com/in/avishek-golder/",
      image: alumni4,
    },
    {
      name: "Divesh Dhanuk Raj",
      desg: "CEO",
      email: "ddraj203@gmail.com",
      lin: "https://www.linkedin.com/in/divesh-dhanuk-raj-7a4b35247/ ",
      image: alumni3,
    },
    {
      name: "Mrinmoy Saikia",
      desg: "SDE",
      email: "saikiaraj4444@gmail.com",
      lin: "https://www.linkedin.com/in/mrinmoy-saikia-40a5aa227/",
      image: alumni2,
    },
  ];
  return (
    <>
      {load ? (
        <>
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
        </>
      ) : (
        <>
          <div class="about-section">
            <h1 className="text-7xl font-bold">Alumni and Experts</h1>
            <p className="text-2xl">
              We are here to help you out and solve your challenges and Queries.
            </p>
          </div>

          <h2 className="text-center mt-5"></h2>
          <div class="row">
            {data.map((val, id) => {
              return (
                <>
                  <div class="column">
                    <div class="card">
                      <img
                        src={val.image}
                        alt="Coding Contest"
                        className="full h-56 object-contain w-full"
                      />
                      <div class="containerx">
                        <h2 className="text-2xl font-bold p-2 pt-5">
                          {val.name}
                        </h2>
                        <p class="title p-2 py-3">Chandigarh University</p>
                        <p className="font-bold p-2 py-0">{val.desg}</p>
                        <p className="p-2 py-0">{val.email}</p>
                        <p>
                          <a target={"_blank"} href={val.lin} class="button">
                            Connect on Linkedin
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Alumni;
