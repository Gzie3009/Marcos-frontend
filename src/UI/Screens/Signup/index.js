import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Signup = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleSignup =async (e) => {
        const signupData={
            name,email,password
        }
        e.preventDefault()
        const res=await fetch("http://localhost:3010/users/register", {
          method: "POST",
          body: JSON.stringify(signupData),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      const data=await res.json()
      if(data.status===200){
        toast.success("Registered Successfully")
        navigate("/")
      }
      else{
        toast.error("Failed to register")
      }
    }

  return (
    <>
        <div className="w-screen grid place-items-center">
        <div class="mainx">
          <div class="headr text-5xl font-bold">
            <h1>Register</h1>
          </div>
          <div class="create mt-5 mb-10">
            <p>
              Create an account to access all the features of <b className="text-2xl">Marcos!</b>
            </p>
          </div>
          <div class="inp">Email</div>
          <input
            class="rginput"
            img="dlogin images/@.png"
            type="email"
            name="enail"
            id="email"
            placeholder="Ex.abc@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <br />
          <div class="naam">Your Name</div>
          <div>
            <input
              class="rginput"
              type="text"
              name="input"
              id="name"
              placeholder="Ex.Saul Ramirez"
              value={name}
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <br />
          <div class="pd">Your Password</div>
          <div>
            <input
              class="rginput"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Min:6 char **"
              value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <button onClick={handleSignup} class="rg">Register</button>

          <div class="w-full flex mt-5">
            <div class="">Already have and account?&nbsp;</div>
            <Link to="/login" class="lg">Login</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Signup