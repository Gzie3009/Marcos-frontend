import React from "react";
import alumni1 from "../../../Assets/Alumni/Alumni1.jpeg"
const Alumni = () => {
  return (
    <>
      <div class="about-section">
        <h1>Alumini and Experts</h1>
        <p>
          We are here to help you out and solve your challenges and Queries.
        </p>
      </div>

      <h2 className="text-center mt-5"></h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src={alumni1}
              alt="Coding Contest"
              className="w-full"
            />
            <div class="containerx">
              <h2>Harsh Choudhary</h2>
              <p class="title">Chandigarh University</p>
              <p>Software Developer.</p>
              <p>immharshchoudhary@gmail.com</p>
              <p>
                <a href="https://www.linkedin.com/in/harsh-choudhary-974296228/">
                  LinkedIn ID
                </a>
              </p>
              <p>
                <button class="button">Contact Us</button>
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={alumni1} alt="Mike" className="w-full" />
            <div class="containerx">
              <h2>Tarun Sharma</h2>
              <p class="title">IIT Delhi</p>
              <p>Graphic Designer.</p>
              <p>tarunsharma@gmail.com</p>
              <p>
                <a href="https://www.linkedin.com/in/harsh-choudhary-974296228/">
                  LinkedIn ID
                </a>
              </p>
              <p>
                <button class="button">Contact Us</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={alumni1} alt="John" className="w-full" />
            <div class="containerx">
              <h2>Risabh Raj</h2>
              <p class="title">Chandigarh University</p>
              <p>Software Tester</p>
              <p>risabhraj@gmail.com</p>
              <p>
                <a href="https://www.linkedin.com/in/harsh-choudhary-974296228/">
                  LinkedIn ID
                </a>
              </p>
              <p>
                <button class="button">Contact Us</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumni;
