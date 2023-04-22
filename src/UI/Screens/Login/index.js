import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const handleLogin = async(e) => {
        const loginData={
            email,password
        }
        e.preventDefault()
        const res=await fetch("http://localhost:3010/users/signin", {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      const data=await res.json()
      if(data){
        alert("Login Successfull")
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
