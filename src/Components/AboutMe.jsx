import React from 'react'
import "./Styles/AboutMe.css"
import about from "../Images/about.png"

export const AboutMe = () => {
  return (
    <div id="about" className='aboutMeDiv'>
        <div className='aboutMeDiv1'>
          <h2>All About Me</h2>
          <img src={about} alt="About"/>
        </div>
        <div className='aboutMeDiv2'>
          <ul>
            <li>
            I'm a Full Stack Web Developer skilled in MERN stack,<br/>who focuses on writing clean, elegant and efficient code.
            </li>
            <li>Currently student at Masai School</li>
            <li>I have built some Projects Using HTML, CSS, JavaScript and React.js</li>
            <li>The Project details are provide below with the github link, deployed link and Video Explaination</li>
          </ul>
        </div>
    </div>
  )
}
