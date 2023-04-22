import React from 'react'
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
const Routings = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
            <Route path='/oppourtunity' element={<Oppourtunities/>}></Route>
            <Route path='/alumni' element={<Alumni/>}></Route>
            <Route path='/webinars' element={<Webinars/>}></Route>
            <Route path='/app/fullaccess/admin' element={<Admin/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default Routings