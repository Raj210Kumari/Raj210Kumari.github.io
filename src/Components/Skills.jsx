import React from 'react'
import "./Styles/Skills.css"
import html from "../Images/html.png"
import css from "../Images/CSS.png"
import Chakra from "../Images/chakra.jpg"
import JS from "../Images/js.png"
import ReactLogo from "../Images/react.png"
import nodeJS from "../Images/nodeJS.png"
import Git from "../Images/git.png"
import skills from "../Images/skills.png"
import MI from "../Images/MI.png"
import Netlify from "../Images/netlify.png"
import ts from "../Images/ts.jpg"

export const Skills = () => {
  return (
    <div className='mainSkillDiv'>
      <div id="skill">
        <div>
        <h1>My Technical Skills</h1>
        </div>
        <div className='skillsDiv'>
            <div className='skillsDivSection' >
              <div><img src={html} alt="HTML"/></div>
              <h3>HTML</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={css} alt="CSS"/></div>
              <h3>CSS</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={JS} alt="JS"/></div>
              <h3>JavaScript</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Chakra} style={{borderRadius:"50%"}} alt="Chakra"/></div>
              <h3>Chakra</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={ReactLogo} alt="React"/></div>
              <h3>React</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={nodeJS} alt="NodeJS"/></div>
              <h3>Node JS</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Git} alt="Git"/></div>
              <h3>Git</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={MI} alt="MI"/></div>
              <h3>Meterial UI</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Netlify} alt="netlify"/></div>
              <h3>Netlify</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={ts} alt="ts" style={{borderRadius:"50%"}}/></div>
              <h3>TypeScript</h3>
            </div>
        </div>
      </div>
      <div className='skillImgDiv'>
        <img src={skills} alt="SkillLogo"/>
      </div>
    </div>
  )
}
