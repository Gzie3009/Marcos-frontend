import React from "react";
import alumni1 from "../../../Assets/Alumni/Alumni1.jpeg";
import alumni2 from "../../../Assets/Alumni/Alumni2.jpeg";
import alumni3 from "../../../Assets/Alumni/Alumni3.jpeg";
import alumni4 from "../../../Assets/Alumni/Alumni4.jpeg";
const Alumni = () => {
  const data = [
    {
      name: "Harsh Choudhury",
      desg: "Software Engineer",
      email: "immharshchoudhary@gmail.com",
      lin: "https://www.linkedin.com/in/harsh-choudhary-974296228/",
      image:alumni1
    },
    {
      name: "Avishek Golder",
      desg: "SDE 4",
      email: "immharshchoudhary@gmail.com",
      lin: "https://www.linkedin.com/in/harsh-choudhary-974296228/",
      image:alumni4
    },
    {
      name: "Divesh Dhanuk Raj",
      desg: "CEO",
      email: "ddraj203@gmail.com",
      lin: "https://www.linkedin.com/in/harsh-choudhary-974296228/",
      image:alumni3
    },
    {
      name: "Mrinmoy Saikia",
      desg: "SDE",
      email: "saikiaraj4444@gmail.com",
      lin: "https://www.linkedin.com/in/harsh-choudhary-974296228/",
      image:alumni2
    }
  ];
  return (
    <>
      <div class="about-section">
        <h1 className="text-7xl font-bold">Alumini and Experts</h1>
        <p className="text-2xl">
          We are here to help you out and solve your challenges and Queries.
        </p>
      </div>

      <h2 className="text-center mt-5"></h2>
      <div class="row">
        {data.map((val, id) => {
          return (
            <>
              <div class="column">
                <div class="card">
                  <img src={val.image} alt="Coding Contest" className="full h-56 object-contain w-full" />
                  <div class="containerx">
                    <h2 className="text-2xl font-bold p-2 pt-5">
                      {val.name}
                    </h2>
                    <p class="title p-2 py-3">Chandigarh University</p>
                    <p className="font-bold p-2 py-0">{val.desg}</p>
                    <p className="p-2 py-0">{val.email}</p>
                    <p>
                      <a target={"_blank"} href={val.lin} class="button">Connect on Linkedin</a>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Alumni;
