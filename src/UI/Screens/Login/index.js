import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import {loginUser} from "../../../store/slice/userSlice"
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { toast } from 'react-toastify';
const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const handleLogin = async(e) => {
        const loginData={
            email,password
        }
        e.preventDefault()
        const res=await fetch("https://marcos-backend.onrender.com/users/signin", {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      const data=await res.json()
      if(data.status===200){
        dispatch(loginUser())
        toast.success("Logged In successfully")
        localStorage.setItem("JWT",data.token);
        localStorage.setItem("email",data.email);
        localStorage.setItem("name",data.name);
        navigate("/")
      }
      else{
        toast.error("Failed to Login")
      }
    }

  return (
    <div className="w-screen grid place-items-center">
        <div class="mainx">
          <div class="headr text-5xl font-bold">
            <h1>Login</h1>
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
            onChange={(e)=>setemail(e.target.value)}
          />
          <br />
          <br />
          <div class="pd">Password</div>
          <div>
            <input
              class="rginput"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Min:6 char **"
              value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <button onClick={handleLogin} class="rg">Login</button>

          <div class="lframe">
            <div class="last">New to Marcos?&nbsp;</div>
            <Link to="/register" class="lg">Register</Link>
          </div>
        </div>
    </div>
  );
};

export default Login;
