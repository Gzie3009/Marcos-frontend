import React,{useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
const EventForm = () => {
    const [load,setLoad]=useState(1)
    useEffect(() => {
      setTimeout(()=>{
        setLoad(0)
      },1000)
    }, [])
    
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
    <>  {load?<><div className="w-screen h-[72vh] grid place-items-center">
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
    </>}
   
    </>
  )
}

export default EventForm