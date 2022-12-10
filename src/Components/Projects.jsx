import React from 'react'
import "./Styles/Project.css"
import project from "../Images/project.png"
import p1 from "../Images/p1.png"
import p2 from "../Images/p2.png"
import p3 from "../Images/p3.png"
import p4 from "../Images/p4.png"

import html from "../Images/html.png"
import css from "../Images/CSS.png"
// import Chakra from "../Images/chakra.jpg"
import JS from "../Images/js.png"
import ReactLogo from "../Images/react.png"
import ReduxLogo from "../Images/redux.png"
// import nodeJS from "../Images/nodeJS.png"
import Git from "../Images/git.png"
import bootstrap from "../Images/bootstrap.png"

const Projects = () => {
  return (
    <div id="project" className='projectMainDiv'>
      <div>
        <h1>Projects</h1>
      </div>
      <div className='projectSecondDiv'>
        <div>
          <img src={project} alt="Project"/>
        </div>
        <div className='projectDiv'>
          <div className='firstProject'>
              <img src={p1} alt="Geekbuying" className='projectImg'/> 
          </div>
          <div className='firstProjectDis'>
            <div>
              <h1>Geekbuying Clone</h1>
            </div>
            <div>
              <img src={ReactLogo} alt="React"/>
              <img src={ReduxLogo} alt="Redux"/>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
              <img src={bootstrap} alt="Bootstrap"/>
            </div>
            <div>
              <p>Geekbuying leading online shop selling a wide range of consumer electronic gadgets. It was founded in 2012 with the mission of creating a platform that truly puts the customer first.</p>
            </div>
            <div>
              <button><a href='https://effervescent-dragon-9ae52a.netlify.app/'>Link</a></button>
              <button><a href='https://github.com/Raj210Kumari/Geekbuying-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProjectDis'>
          <div>
              <h1>Sephora Clone</h1>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
              <img src={Git} alt="GitHub"/>
            </div>
            <div>
              <p>Sephora is a French multinational retailer of luxury beauty and skincare e-commerce platfom, launched in India in year 2013. </p>
            </div>
            <div>
              <button><a href='https://graceful-longma-ee5897.netlify.app/index.html'>Link</a></button>
              <button><a href='https://github.com/Raj210Kumari/Sephora-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProject'>
              <img src={p2} alt="Sephora" className='projectImg'/>
          </div>
          <div className='firstProject'>
              <img src={p3} alt="BathBodyWorks" className='projectImg'/> 
          </div>
          <div className='firstProjectDis'>
            <div>
              <h1>Bath&Body Works</h1>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
              <img src={Git} alt="GitHub"/>
            </div>
            <div>
              <p>BathBadyWorks is American retail store chain. It was founded in 1990 in New Albany, Ohio. It mainly sells soaps, perfumes, candles, etc. </p>
            </div>
            <div>
              <button><a href='https://wonderful-pithivier-711422.netlify.app/'>Link</a></button>
              <button><a href='https://github.com/Raj210Kumari/BathBodyWorks-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProjectDis'>
          <div>
              <h1>Beauty Bebo</h1>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
              <img src={Git} alt="GitHub"/>
            </div>
            <div>
              <p>BeautyBebo is online retail store for the day to day and special occasion need of the Mackup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products. </p>
            </div>
            <div>
              <button><a href='https://dynamic-sfogliatella-27dde0.netlify.app/'>Link</a></button>
              <button><a href='https://github.com/Raj210Kumari/BeautyBebo-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProject'>
              <img src={p4} alt="BeautyBebo" className='projectImg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects