// import React from 'react'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./Styles/Contact.css";
import ContactMe from "../Images/Contact-Me.png";
// import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { GitHub, LinkedIn } from '@mui/icons-material';
import heart from "../Images/heart.png"
import {Box} from "@chakra-ui/react"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8cto6xg",
        "template_z07756o",
        form.current,
        "qZwb3sXRjYiTZeMcS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contactDiv">
      <div>
        <h1>Contact Me</h1>
      </div>
      <Box className="contactDivSection" alignContent="center">
        
          <img src={ContactMe} alt="ContactMe" className="center"/>
        
      </Box>
      <div className="middleSection">
        <div data-aos="fade-right" style={{ color: "white" }}>
          <PhoneIcon fontSize="large" />
          <h1>Phone</h1><br/>
          {/* <p>Here is My Phone Number</p> */}
          <a href="tel:+91-7077511496" rel="noreferrer" target="_blank">
            <p>+91-7077511496</p>
          </a>
        </div>
        <div data-aos="fade-down" style={{ color: "white" }}>
          <LinkedIn fontSize="large" />
          <h1>LinkedIn</h1><br/>
          {/* <p>Here is My LinkedIn</p> */}
          <a
            href="https://www.linkedin.com/in/k-rajnandani210/"
            rel="noreferrer"
            target="_blank"
          >
            <p>k-rajnandani210</p>
          </a>
        </div>
        <div data-aos="fade-up" style={{ color: "white" }}>
          <GitHub fontSize="large" />
          <h1>Github</h1><br/>
          {/* <p>Here is My Github</p> */}
          <a
            href="https://github.com/Raj210Kumari"
            rel="noreferrer"
            target="_blank"
          >
            <p>Raj210Kumari</p>
          </a>
        </div>
        <div data-aos="fade-up" style={{ color: "white" }}>
          <EmailIcon fontSize="large" />
          <h1>Email</h1>
          <br/>
          {/* <p>Send mail here</p> */}
          <a
            href="mailto:rajnandani02101997@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <p>rajnandani02101997@gmail.com</p>
          </a>
        </div>
        <div data-aos="fade-left" style={{ color: "white" }}>
          <LocationOnIcon fontSize="large" />
          <h1>Location</h1>
          <br/>
          <p>Mihijam, Jharkhand</p>
        </div>
      </div>
      <div className="endSection">
        <div><span>© 2022 Rajnandani Kuamri</span></div>
        <div><span>Made with <img src={heart} alt="heart" style={{height:"20px"}}/> in India</span></div>
      </div>
    </div>
  );
};

