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

export const Skills = () => {
  return (
    <div className='mainSkillDiv'>
      <div id="skill">
        <div>
        <h1>My Technical Skills</h1>
        </div>
        <div className='skillsDiv'>
            <div className='skillsDivSection' >
              <div><img src={html} /></div>
              <h3>HTML</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={css} /></div>
              <h3>CSS</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={JS} /></div>
              <h3>JavaScript</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Chakra} style={{borderRadius:"50%"}}/></div>
              <h3>Chakra</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={ReactLogo} /></div>
              <h3>React</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={nodeJS} /></div>
              <h3>Node JS</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Git} /></div>
              <h3>Git</h3>
            </div>
            <div className='skillsDivSection'></div>
            <div className='skillsDivSection'></div>
            <div className='skillsDivSection'></div>
        </div>
      </div>
      <div className='skillImgDiv'>
        <img src={skills} />
      </div>
    </div>
  )
}
