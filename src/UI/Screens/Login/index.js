import React from "react";
import "./login.css";
const Login = () => {
  return (
    <>
        <div class="mainx">
          <div class="headr">
            <h1>Register</h1>
          </div>
          <div class="create">
            <p>
              Create an account to access all the features of <b>Maxpense!</b>
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
          />

          <section class="Flexcontainer">
            <div class="a">
              <img src="dlogin images/@.png" alt="" />
            </div>
            <div class="e1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex.abc@example.com"
              />
            </div>
          </section>
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
            />
          </div>
          <br />
          <br />
          <div class="rg">Register</div>

          <div class="lframe">
            <div class="last">Already have and account?&nbsp;</div>
            <div class="lg">Login</div>
          </div>
        </div>
    </>
  );
};

export default Login;
