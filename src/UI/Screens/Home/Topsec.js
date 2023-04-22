import React from 'react'
import hero from "../../../Assets/Homepage/heroimg.png"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
const Topsec = () => {
  const d=useSelector((state)=>{
    return state.users["auth"]
  })
  return (
    <>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ask anything , anywhere
        <br class="hidden lg:inline-block"/>anywhere.
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      {d?<div class="flex justify-center">
        <Link to="/feed" class="inline-flex text-white bg-[#0057ff] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Our Mentors</Link>
        <Link to="/oppourtunity" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See Jobs</Link>
      </div>:
      <div class="flex justify-center">
        <Link to="/register" class="inline-flex text-white bg-[#0057ff] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join Us for free</Link>
        <Link to="/login" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Log In</Link>
      </div>}
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={hero}/>
    </div>
  </div>
</section>
<hr className='py-10'/>
    </>
  )
}

export default Topsec