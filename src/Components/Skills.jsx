import React from 'react'
import "./Styles/Skills.css"
import html from "../Images/html.png"
import css from "../Images/CSS.png"
import Chakra from "../Images/chakra.jpg"
import JS from "../Images/js.png"
import ReactLogo from "../Images/react.png"
import ReduxLogo from "../Images/redux.png"
import nodeJS from "../Images/nodeJS.png"
import Express from "../Images/express.png"
import MongoDB from "../Images/mongodb.png"
import NPM from "../Images/npm.png"
import Git from "../Images/git.png"
import skills from "../Images/skills.png"
import Postman from "../Images/postman.png"
import MI from "../Images/MI.png"
import Bootstrap from "../Images/bootstrap.png"
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
              <div><img src={ReactLogo} alt="React"/></div>
              <h3>React</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={ReduxLogo} alt="redux"/></div>
              <h3>Redux</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={nodeJS} alt="NodeJS"/></div>
              <h3>Node JS</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Express} alt="Express"/></div>
              <h3>Express</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={MongoDB} alt="MongoDB"/></div>
              <h3>MongoBDB</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={NPM} alt="NPM"/></div>
              <h3>NPM</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={ts} alt="ts" style={{borderRadius:"50%"}}/></div>
              <h3>TypeScript</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Git} alt="Git"/></div>
              <h3>Git</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Postman} alt="Postman"/></div>
              <h3>Postman</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Chakra} style={{borderRadius:"50%"}} alt="Chakra"/></div>
              <h3>Chakra UI</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={MI} alt="MI"/></div>
              <h3>Meterial UI</h3>
            </div>
            <div className='skillsDivSection'>
              <div><img src={Bootstrap} alt="Bootstrap"/></div>
              <h3>Bootstrap</h3>
            </div>
            
        </div>
      </div>
      <div className='skillImgDiv'>
        <img src={skills} alt="SkillLogo"/>
      </div>
    </div>
  )
}
