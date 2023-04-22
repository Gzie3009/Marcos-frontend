import React, { useEffect, useState } from "react";
import "./style.css";
import pic1 from "../../../Assets/Oppourtunities/oppourtunity1.jpeg";
const Oppourtunities = () => {
  const [loading,setLoading]=useState(1)
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const getData=async ()=>{
    const res1 = await fetch("https://marcos-backend.onrender.com/users/researchpost");
    const x1=await res1.json();
    setData1(x1.post);
    const res2 = await fetch("https://marcos-backend.onrender.com/users/projectpost");
    const x2=await res2.json();
    setData2(x2.post);

    console.log(x2.post)
    const res3 = await fetch("https://marcos-backend.onrender.com/users/internpost");
    const x3=await res3.json();
    setData3(x3.post);
    if(x3){
      setLoading(0)
    }
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      {loading? <div className="w-screen h-[72vh] grid place-items-center">
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
        </div>:<>
      <h1 class="mt-6 font-bold text-center text-4xl text-bold text-blue-600 underline">
        Internships
      </h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-10 pb-24 mx-auto">
          <div class="flex flex-wrap -m-4">

            {data3 && data3.map((val,index)=>{
              return(<>
                <div class="p-4 lg:w-1/3" key={index}>
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-between">
              <div>
                <h1 class="title-font sm:text-4xl text-xl font-medium text-[#0057FF] mb-3">
                  {val.name}
                </h1>
                <p class="leading-relaxed mb-3 text-1xl font-bold">
                  {val.title}
                </p>
                <p classS="items-center text-black">
                  {val.details}
                </p>
                </div>
                <a target={"_blank"} href={val.link} class="flex mx-auto mt-16 text-white bg-[#0057FF] border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                Apply Now
                </a>
              </div>
            </div>
              </>)
            })}
            
          </div>
        </div>
      </section>
      <h1 class="mt-10 text-center text-4xl font-bold text-blue-600 underline">
        Research Papers
      </h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-10 pb-16 mx-auto">
          <div class="flex flex-wrap -m-4">
            {data1 && data1.map((val,index)=>{
              return(<>
                <div class="p-4 lg:w-1/3" key={index}>
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-between">
              <div className="">
                <h1 class="title-font sm:text-4xl text-xl font-medium text-[#0057FF] mb-3">
                  {val.name}
                </h1>
                <p class="leading-relaxed mb-3 text-1xl font-bold">
                  {val.title}
                </p>
                <p class="items-center text-black">
                  {val.details}
                </p>
                </div>
                <a target={"_blank"} href={val.link} class="flex mx-auto mt-16 text-white bg-[#0057FF] border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                  Contribute
                </a>
              </div>
            </div>
              </>)
            })}

          </div>
        </div>
      </section>

      <hr className="py-10" />

      <h1 class="mt-5  text-center text-4xl text-blue-600 font-bold underline">
        Projects
      </h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-10 pb-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {data2 && data2.map((val,index)=>{
              return <>
              <div class="p-4 lg:w-1/3" key={index}>
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-between">
              <div>
                <h1 class="title-font sm:text-4xl text-xl font-medium text-[#0057FF] mb-3">
                  {val.name}
                </h1>
                <p class="leading-relaxed mb-3 text-1xl font-bold">
                  {val.title}
                </p>
                <p class="items-center text-black">
                  {val.details}
                </p>
                </div>
                <a target={"_blank"} href={val.link} class="flex mx-auto mt-16 text-white bg-[#0057FF] border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                  Contribute
                </a>
              </div>
            </div>
            </>
            })}

          </div>
        </div>
      </section>

      <hr className="py-10" />
      </>}
    </>
  );
};

export default Oppourtunities;
