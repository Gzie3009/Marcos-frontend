import React,{useState} from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
const EventForm = () => {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [title,setTitle]=useState("")
    const [email,setEmail]=useState("")
    const [type,setType]=useState("")
    const [details,setDetails]=useState("")
    const handleSubmit=async ()=>{
        const contactData={name,title,email,type,details}
        const res=await fetch("https://marcos-backend.onrender.com/users/contact",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contactData),

        })
        const data=await res.json();
        if(data.status===200){
            toast.success("Message sent successfully")
            toast.success("We will reach out to you shortly")
            navigate("/profile")
        }else{
            toast.error("Try Again")
        }
    }
  return (
    <>
        <div class="flex justify-center items-center w-screen h-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">

            <div class="w-full p-8 my-4 md:px-12 lg:w-12/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div class="text-center">
                    <h1 class="font-bold uppercase text-5xl text-blue-700">Event Details</h1>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Organizer Name*" id="orgname" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email" placeholder="Email*" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="my-4">
                    <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Program Title*" id="programtitle" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Program Type: Webinar/Volunteering/Research/Projects" id="programtitle" value={type} onChange={(e)=>setType(e.target.value)}/>
                    <textarea placeholder="Description*"
                        class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" id="description" value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
                </div>
                <div className='w-full text-center text-xl font-bold text-[#0057ff]'>
                    Our Team will review your request and may contact you soon to confirm your Event Request's Status
                </div>
                <div class=" w-full">
                    <button onClick={handleSubmit} class="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline hover:bg-blue-500">
                        Submit Details
                    </button>
                </div>
            </div>


        </div>
    </div>
   
    </>
  )
}

export default EventForm