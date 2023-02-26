import React from "react";
import Typical from "react-typical";
import { Heading, Image } from "@chakra-ui/react";
import "./Styles/Home.css"
import raj from "../Images/raj..png"
import Resume from "../Rajnandani_Kumari_Resume.pdf"
// import { Link } from "react-scroll";

export const Home = () => {
  
  return (
    <div
      id="home"
      className="homeDiv"
    >
      <div style={{  textAlign: "center" }} >
        <Heading fontSize="60px">Hi I'm</Heading>
        <Heading fontSize="50px">Rajnandani Kumari</Heading>
        <br></br>
        <h1 style={{ fontSize: "32px" , color:"blueviolet"}}>
          <Typical
            loop={Infinity}
            steps={[
              "Full Stack Developer",
              1000,
              "MERN Stack Developer",
              1000,
              "React Developer",
              1000,
            ]}
          />
        </h1>
        <button className="resumeBtn">
          <a 
            href={Resume} download="Rajnandani_Kuamri_Resume" onClick={()=>window.open('https://drive.google.com/file/d/18ogbzR1xeFjQYVKSx3g851M0Xefp_a6N/view?usp=share_link')}
            style={{textDecoration:"none",color:"#fff"}}
          >
          Resume</a>
          </button>
      </div>
      <div className="homeDivImgMain">
        <Image className="homeDivImg"
          src={raj}
          alt="Rajnandani"
        />
      </div>
    </div>
  );
};
