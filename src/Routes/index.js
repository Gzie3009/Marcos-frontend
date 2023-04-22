import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../UI/Screens/Home'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'
import Login from '../UI/Screens/Login'
import Feed from '../UI/Screens/Feed'
const Routings = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default Routings