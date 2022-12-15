import React from "react";
import Typical from "react-typical";
import { Heading, Image } from "@chakra-ui/react";
import "./Styles/Home.css"
import raj from "../Images/raj-removebg-preview.png"
import Resume from "../Rajnandani_Kumari_Resume.pdf"
// import { Link } from "react-scroll";

export const Home = () => {
  
  return (
    <div
      id="home"
      className="homeDiv"
    >
      <div style={{  textAlign: "center" , marginTop:"140px"}} >
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
        <button 
          style={{height:"65px", width:"200px",fontSize:"40px",fontWeight:"700",marginTop:"20px",backgroundColor:"transparent",  border:"1px solid blueviolet",borderRadius:"20px"}} 
          >
          <a 
            href={Resume} download="Rajnandani_Kuamri_Resume" onClick={()=>window.open('https://drive.google.com/file/d/1JNg5XlMgmLy1ZNAqFpK4D39VciH79WPB/view?usp=share_link')}
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
