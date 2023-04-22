import React, { useEffect, useState } from "react";
import "./style.css";
import pic1 from "../../../Assets/Oppourtunities/oppourtunity1.jpeg";
const Oppourtunities = () => {
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
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <>
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
                <a target={"_blank"} href={"https://linkedin.com/in/"+val.name} class="flex mx-auto mt-16 text-white bg-[#0057FF] border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
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
                <a target={"_blank"} href={"https://linkedin.com/in/"+val.name} class="flex mx-auto mt-16 text-white bg-[#0057FF] border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
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
                <a target={"_blank"} href={"https://linkedin.com/in/"+val.name} class="flex mx-auto mt-16 text-white bg-[#0057FF] border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
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
    </>
  );
};

export default Oppourtunities;
