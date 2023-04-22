import React from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
const Volunteer = () => {
  const navigate=useNavigate();
  const login=useSelector((state)=> {return state.users["auth"]})
  const handleClick=()=>{
    if(login==0){
      navigate("/register")
    }
    else{
      window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSf5TnT1C_c_eEPtaBacPNsvTLemJD2Xgtj3UbiKwznJ_CIwNA/viewform?usp=sf_link"
    }
  }
  return (
    <>
        <section class="w-full text-gray-600 body-font border-b mb-10">
        <div className="w-full grid place-items-center text-6xl font-bold pb-10 -mt-5">Volunteering Events</div>
        <div class="container px-5 pb-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 hover: ">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl shadow-[#0057FF]">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://acfa.apeejay.edu/media/k2/items/cache/461011bcaf5b5e723e897c33f049f169_XL.jpg"/ >
                <div class="p-6">
                  <h2 class="text-2xl font-medium title-font text-center text-gray-900 mt-5">Blood Donation</h2>
                  
                  <button onClick={handleClick} class="flex mx-auto mt-6 text-white bg-[#0057FF] border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded">Join Now</button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl shadow-[#0057FF]">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.signupgenius.com/cms/socialMediaImages/beach-clean-up-tips-ideas-facebook-1200x630.png" />
                <div class="p-6">
                  <h2 class="text-2xl font-medium title-font text-center text-gray-900 mt-5">Beach Clean Up</h2>
                  
                  <button onClick={handleClick} class="flex mx-auto mt-6 text-white bg-[#0057FF] border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded">Join Now</button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl shadow-[#0057FF]">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/4uEOtNIRKp.jpg" />
                <div class="p-6">
                  <h2 class="text-2xl font-medium title-font text-center text-gray-900 mt-5">Teach Roadside Students</h2>
                  
                  <button onClick={handleClick} class="flex mx-auto mt-6 text-white bg-[#0057FF] border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded">Join Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Volunteer