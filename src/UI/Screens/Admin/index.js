import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';
const Admin = () => {
    const navigate = useNavigate()
    const [show,setShow]=useState(0)
    const verify=()=>{
      const email=localStorage.getItem("email")
      if(email==="Admin@gmail.com")
      {
        setShow(1)
      }
      else{
        navigate("/")
      }
    }
  const [userData, setUserData] = useState();
  const [oppoData, setOppoData] = useState();
  const [intern,setIntern]=useState();
  const [research,setResearch]=useState();
  const fetchData = async () => {
    const res1 = await fetch("https://marcos-backend.onrender.com/users/allusers");
    const x1 = await res1.json();
    setUserData(x1.users);
    const res2 = await fetch("https://marcos-backend.onrender.com/users/projectpost");
    const x2 = await res2.json();
    setOppoData(x2.post);

    const res3 = await fetch("https://marcos-backend.onrender.com/users/researchpost");
    const x3 = await res3.json();
    setResearch(x3.post);

    const res4 = await fetch("https://marcos-backend.onrender.com/users/internpost");
    const x4 = await res4.json();
    setIntern(x4.post);
  };  
  const handleDelete = async (e) => {
    const email = e
    const res=await fetch(`http://localhost:3010/users/delete/${email}`, {
        method: "DELETE",
      });
    const x1=res.json()
    if(x1.status){
        toast.success("Deleted Successfully")
        toast.success("Refresh to see changes")
    }
  };
  const handleDelete2 = async (e) => {
    const email = e
    const res=await fetch(`http://localhost:3010/users/delete/project/`+email, {
        method: "DELETE",
      })
    const x1=res.json()
    if(x1.status){
        toast.success("Deleted Successfully")
        toast.success("Refresh to see changes")
    }
  };

  const handleDelete3 = async (e) => {
    const email = e
    const res=await fetch(`http://localhost:3010/users/delete/research/`+email,{
  method: "DELETE"
});
    const x1=res.json()
    if(x1.status){
        toast.success("Deleted Successfully")
        toast.success("Refresh to see changes")
    }
  };

  const handleDelete4 = async (e) => {
    const email = e
    const res=await fetch(`http://localhost:3010/users/delete/intern/`+email, {
        method: "DELETE",
      })
    const x1=res.json()
    if(x1.status){
        toast.success("Deleted Successfully")
        toast.success("Refresh to see changes")
    }
  };


  useEffect(() => {
    verify();
    fetchData();
  }, []);

  return (
    <>
    {show? 
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-[70vh] border-[10px] border-[#0057ff] rounded-lg overflow-y-auto">
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-center border-b border-[#0057ff]">
                    User
                  </h1>
                  {userData &&
                    userData.map((val, id) => {
                      return (
                        <div key={id}>
                          <i
                            onClick={()=>handleDelete(val.email)}
                            class="fa fa-times hover:cursor-pointer text-2xl text-blue-600 float-right"
                            aria-hidden="true"
                          ></i>
                          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                            Name : {val.name}
                          </h1>
                          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                            Email : {val.email}
                          </h1>
                          <hr />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-[70vh] border-[10px] border-[#0057ff]  rounded-lg overflow-y-auto">
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-center border-b border-[#0057ff]">
                  Opportunity
                  </h1>
                    {oppoData && oppoData.map((val,index)=>{
                        return(<div key={index}>
                            <i onClick={()=>handleDelete2(val.email)}
                    class="fa fa-times hover:cursor-pointer text-2xl text-blue-600 float-right"
                    aria-hidden="true"
                  ></i>
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    {val.name}
                  </h1>
                  <h1 class="title-font font-medium text-gray-900 mb-3">
                    {val.title}
                  </h1>
                  <hr />
                        </div>)
                    })}
                    {intern && intern.map((val,index)=>{
                        return(<div key={index}>
                            <i onClick={()=>handleDelete3(val.email)}
                    class="fa fa-times hover:cursor-pointer text-2xl text-blue-600 float-right"
                    aria-hidden="true"
                  ></i>
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    {val.name}
                  </h1>
                  <h1 class="title-font font-medium text-gray-900 mb-3">
                    {val.title}
                  </h1>
                  <hr />
                        </div>)
                    })}
                    {research && research.map((val,index)=>{
                        return(<div key={index}>
                            <i onClick={()=>handleDelete4(val.email)}
                    class="fa fa-times hover:cursor-pointer text-2xl text-blue-600 float-right"
                    aria-hidden="true"
                  ></i>
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    {val.name}
                  </h1>
                  <h1 class="title-font font-medium text-gray-900 mb-3">
                    {val.title}
                  </h1>
                  <hr />
                        </div>)
                    })}









                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-[70vh] border-[10px] border-[#0057ff] rounded-lg overflow-y-auto">
                <div class="p-6">
                  <h1 class="h-10 border-b border-[#0057ff] title-font text-lg font-medium text-gray-900 mb-3 text-center">
                    Webinar
                  </h1>

                  <i
                    class="fa fa-times hover:cursor-pointer text-2xl text-blue-600 float-right"
                    aria-hidden="true"
                  ></i>
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    IEEE
                  </h1>
                  <h1 class="title-font font-medium text-gray-900 mb-3">
                    GaN TECHNOLOGY
                  </h1>
                  <hr />

                  <i
                    class="fa fa-times hover:cursor-pointer text-2xl text-blue-600 float-right"
                    aria-hidden="true"
                  ></i>
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    Rupam Bhattacharjee
                  </h1>
                  <h1 class="title-font font-medium text-gray-900 mb-3">
                    Webinar on DSA
                  </h1>
                  <hr />

                  <i
                    class="fa fa-times hover:cursor-pointer text-2xl text-blue-600 float-right"
                    aria-hidden="true"
                  ></i>
                  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                    Mircosoft India
                  </h1>
                  <h1 class="title-font font-medium text-gray-900 mb-3">
                    Webinar on Webdevelopment
                  </h1>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      :null}
    </>
  );
};

export default Admin;
