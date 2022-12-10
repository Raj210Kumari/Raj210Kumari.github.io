// import React from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components"
import "./Styles/Contact.css"
import ContactMe from "../Images/Contact-Me.png"

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8cto6xg', 'template_z07756o', form.current, 'qZwb3sXRjYiTZeMcS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className='contactDiv'>
        <div>
          <h1>Contact Me</h1>
        </div>
        <div className='contactDivSection'> 
          <div>
            <img src={ContactMe} alt="ContactMe"/>
          </div>
          <div className='formDiv'>
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" style={{fontSize:"24px"}}/>
              </form>
            </StyledContactForm>
          </div>
        </div>
        <div className='footerTag'>
            <h2>Rajnandani Kuamri</h2>
        </div>
    </div>
  )
}

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 200%;
    font-size: 24px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      height:50px;
      background: blueviolet;
      color: white;
      border: none;
    }
  }
`;
