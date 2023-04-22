import React from 'react'
import pic1 from "../../../Assets/Webinars/webinar1.jpeg"
import pic2 from "../../../Assets/Webinars/webinar2.jpeg"
import pic3 from "../../../Assets/Webinars/webinar3.jpeg"
const Webinars = () => {
  return (
    <>
        <div class="about-section">
    <h1 className='text-6xl'>Seminar / Webinar</h1>
    <p className='text-2xl'>List of upcoming informative Webinar and Seminars.</p>
    <p className='text-2xl'>Excited you to see all you there!!.</p>
  </div>
  
  <h2 className='text-center mt-5'></h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src={pic1} alt="Coding Contest" className='w-full'/>
        <div class="containerx">
          <h2 className='text-xl font-bold'>Coding Scholarship Test</h2>
          <p class="title">By Coding Ninja</p>
           <p>coding_ninja@gmail.com</p>
          <p><a href="https://bit.ly/3UREFKm" class="button">Register Now</a></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={pic2} alt="Mike" className='w-full'/>
        <div class="containerx">
         
          <h2 className='text-xl font-bold'>Fundamentals of Entrepreneurship</h2>
          <p class="title"> Rupam Bhattacharjee</p>
          <p>rupambhattacharjee@gmail.com</p>
          <p><a href="https://rebrand.ly/IEEE-CTSOC" class="button">Register Now</a></p>
        </div>
      </div>
    </div>
  
    <div class="column">
        <div class="card">
          <img src={pic3} alt="Mike" className='w-full'/>
          <div class="containerx">
            <h2 className='text-xl font-bold'>IEEE webinar</h2>
            <p class="title">IEEE BYTES</p>
            <p>ieeebytes@gmail.com</p>
            <p><a href="https://ieeemeetings.webex.com/weblink/register/r6100b0ec5795f6b2889e7849f189c821" class="button">Register Now</a></p>
            
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Webinars