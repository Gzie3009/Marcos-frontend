import React from 'react'

const Signup = () => {
  return (
    <>
        <div class="sec">
          <div class="h2">
            <h1>Login</h1>
          </div>
          <div class="verify">
            <p>Login now to track all your expensex and income at a place!</p>
          </div>
          <div class="inp">Email</div>
          <input
            class="rginput"
            img="dlogin images/@.png"
            type="email"
            name="enail"
            id="email"
            placeholder="Ex.abc@example.com"
          />
          <br />
          <br />
          <div class="pd">Your Password</div>
          <div>
            <input
              class="rginput"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Min:6 char **"
            />
          </div>
          <p class="forgot">Forgot Password?</p>
          <div class="rg">Login</div>
          <br />
          <hr class="line" />
          <div class="go">
            <div class="do">Don't have an account?&nbsp;</div>
            <div class="gt">Register</div>
          </div>
        </div>
    </>
  )
}

export default Signup