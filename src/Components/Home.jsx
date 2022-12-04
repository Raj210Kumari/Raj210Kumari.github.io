import React from "react";
import Typical from "react-typical";
import { Heading, Image } from "@chakra-ui/react";
import "./Styles/Home.css"
import raj from "../Images/raj-removebg-preview.png"

export const Home = () => {
  
  return (
    <div
      id="home"
      style={{
        // border: "1px solid red",
        height: "auto",
        paddingTop: "150px",
        display: "flex",
        justifyContent:"space-around"
      }}
      className="homeDiv"
    >
      <div style={{  textAlign: "center" , marginTop:"140px"}}>
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
      </div>
      <div >
        <Image className="homeDivImg"
          src={raj}
          alt="Rajnandani"
        />
      </div>
    </div>
  );
};
