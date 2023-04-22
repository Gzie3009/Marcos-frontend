import React from 'react'
import "./style.css"
import pic1 from "../../../Assets/Oppourtunities/oppourtunity1.jpeg"
const Oppourtunities = () => {
  return (
    <>
        <div class="about-section">
    <h1>Opportunities</h1>
    <p>List of upcoming internships, Jobs and Competitions.</p>
  </div>
  
  <h2 className='text-center mt-5'></h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src={pic1} alt="Coding Contest" className='w-full'/>
        <div class="containerx">
          <h2>Coding Scholarship Test</h2>
          <p class="title">Coding Ninja</p>
          <p><a href="https://bit.ly/3UREFKm">Registeration Link</a></p>
          <p><button class="button">Contact Us</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={pic1} className='w-full'/>
        <div class="containerx">
          <h2>Graphic Designer</h2>
          <p class="title">Marcos pvt ltd.</p>
          <p>Looking for a Graphic Designer with minimum experience of 1 year. Can send the Resume to the email ID attached below.</p>
          <p>marcos@gmail.com</p>
          <p><a href="https://bit.ly/3UREFKm">Registeration Link</a></p>
          <p><button class="button">Contact Us</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={pic1} alt="John" className='w-full'/>
        <div class="containerx">
          <h2>Backend Developer</h2>
          <p class="title">Codehelp</p>
          <p>Looking for an Intern. Who is good at backend Development. No more prior experience is required. </p>
          <p>Striver@gmail.com</p>
          <p><a href="https://bit.ly/3UREFKm">Registeration Link</a></p>
          <p><button class="button">Contact Us</button></p>
        </div>
      </div>
    </div>
    
  </div>
    </>
  )
}

export default Oppourtunities