import React from 'react'
import pic1 from "../../../Assets/Webinars/webinar1.jpeg"
import pic2 from "../../../Assets/Webinars/webinar2.jpeg"
const Webinars = () => {
  return (
    <>
        <div class="about-section">
    <h1>Seminar / Webinar</h1>
    <p>List of upcoming informative Webinar and Seminars.</p>
    <p>Excited you to see all you there!!.</p>
  </div>
  
  <h2 className='text-center mt-5'></h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src={pic1} alt="Coding Contest" className='w-full'/>
        <div class="containerx">
          <h2>Webinar on DSA</h2>
          <p class="title">By Striever</p>
           <p>striver@gmail.com</p>
          <p><a href="https://bit.ly/3UREFKm">Registeration Link</a></p>
          <p><button class="button">Contact Us</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={pic2} alt="Mike" className='w-full'/>
        <div class="containerx">
         
          <h2>Fundamentals of Entrepreneurship</h2>
          <p class="title">By Rupam Bhattacharjee</p>
          <p>rupambhattacharjee@gmail.com</p>
          <p><a href="https://rebrand.ly/IEEE-CTSOC">Registeration Link</a></p>
          <p><button class="button">Contact Us</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
        <div class="card">
          <img src={pic1} alt="Mike" className='w-full'/>
          <div class="containerx">
            <h2>Seminar on WebD</h2>
            <p class="title">By Love Babbar</p>
            <p>codehelp@gmail.com</p>
            <p><a href="https://rebrand.ly/IEEE-CTSOC">Registeration Link</a></p>
            <p><button class="button">Contact Us</button></p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Webinars