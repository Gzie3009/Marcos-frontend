import React, { Profiler } from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../UI/Screens/Home'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'
import Login from '../UI/Screens/Login'
import Feed from '../UI/Screens/Feed'
import Oppourtunities from '../UI/Screens/Oppoutunities'
import Alumni from '../UI/Screens/Alumni'
import Webinars from '../UI/Screens/Webinars'
import Signup from '../UI/Screens/Signup'
import Admin from '../UI/Screens/Admin'
import EventForm from '../UI/Screens/Profile'
import Profile from '../UI/Screens/Profile/Profile'
import { useSelector } from 'react-redux'
import Error from "../UI/Screens/Error/Error"
import About from '../UI/Screens/About'
import Contact from "../UI/Screens/contact"
import TermsAndConditions from '../UI/Screens/TermsAndCondition'
const Routings = () => {
  const user=useSelector((state)=>{
    return state.users["auth"]
  })
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            {user===1?<><Route path='/oppourtunity' element={<Oppourtunities/>}></Route>
            <Route path='/alumni' element={<Alumni/>}></Route>
            <Route path='/webinars' element={<Webinars/>}></Route>
            <Route path='/profile/form' element={<EventForm/>}></Route>
            <Route path='/profile' element={<Profile/>}/> </>:<></>}
            <Route path='/app/fullaccess/admin' element={<Admin/>}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/tandc' element={<TermsAndConditions/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default Routings