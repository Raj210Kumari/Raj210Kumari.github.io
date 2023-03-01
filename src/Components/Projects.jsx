import React from 'react'
import "./Styles/Project.css"
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

import P1Card from "./projectCards/P1Card"
import P2Card from "./projectCards/P2Card"
import P3Card from "./projectCards/P3Card"
import P4Card from "./projectCards/P4Card"

const Projects = () => {
  return (
    <div id="project" className='projectMainDiv'>
      <div>
        <h1>Projects</h1>
      </div>
      <div className='projectSecondDiv'>
        <div className='projectDiv'>
          <div className='firstProject'>
              <a target="blank" href="https://github.com/Raj210Kumari/Geekbuying-Clone"><img src={p1} alt="Geekbuying" className='projectImg'/> </a>
          </div>
          <div className='firstProjectDis'>
            <div>
              <h2>Geekbuying Clone</h2>
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
              <p>React || Redux || HTML || CSS || JS || Bootstrap</p>
              <br/>
              <p>Geekbuying leading online shop selling a wide range of consumer electronic gadgets.</p>
            </div>
            <div>
              <button><a target="blank" href='https://effervescent-dragon-9ae52a.netlify.app/'>Link</a></button>
              <button><a target="blank" href='https://github.com/Raj210Kumari/Geekbuying-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProjectDis'>
          <div>
              <h2>Sephora Clone</h2>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
              <img src={Git} alt="GitHub"/>
            </div>
            <div>
            <p>HTML || CSS || JS || Git</p>
              <br/>
              <p>Sephora is a French multinational retailer of luxury beauty and skincare e-commerce platfom.</p>
            </div>
            <div>
              <button><a target="blank" href='https://graceful-longma-ee5897.netlify.app/index.html'>Link</a></button>
              <button><a target="blank" href='https://github.com/Raj210Kumari/Sephora-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProject'>
              <a target="blank" href="https://github.com/Raj210Kumari/Sephora-Clone"><img src={p2} alt="Sephora" className='projectImg'/></a>
          </div>
          <div className='firstProject'>
          <a target="blank" href='https://github.com/Raj210Kumari/BathBodyWorks-Clone'><img src={p3} alt="BathBodyWorks" className='projectImg'/></a>
          </div>
          <div className='firstProjectDis'>
            <div>
              <h2>Bath&Body Works</h2>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
              <img src={Git} alt="GitHub"/>
            </div>
            <div>
            <p>HTML || CSS || JS || Git</p>
              <br/>
              <p>BathBadyWorks is American retail store chain. It mainly sells soaps, perfumes, candles, etc. </p>
            </div>
            <div>
              <button><a target="blank" href='https://wonderful-pithivier-711422.netlify.app/'>Link</a></button>
              <button><a target="blank" href='https://github.com/Raj210Kumari/BathBodyWorks-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProjectDis'>
          <div>
              <h2>Beauty Bebo</h2>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
              <img src={Git} alt="GitHub"/>
            </div>
            <div>
            <p>HTML || CSS || JS || Git</p>
              <br/>
              <p>BeautyBebo is online retail store for Skin care, Hair care, Personal care, Baby care, etc. </p>
            </div>
            <div>
              <button><a  target="blank" href='https://dynamic-sfogliatella-27dde0.netlify.app/'>Link</a></button>
              <button><a target="blank" href='https://github.com/Raj210Kumari/BeautyBebo-Clone'>Github</a></button>
            </div>
          </div>
          <div className='firstProject'>
          <a target="blank" href='https://github.com/Raj210Kumari/BeautyBebo-Clone'><img src={p4} alt="BeautyBebo" className='projectImg'/></a>
          </div>
        </div>
      </div>
      <div className='projectMinScrDiv'>
        <P1Card/>
        <P2Card/>
        <P3Card/>
        <P4Card/>
      </div>
    </div>
  )
}

export default Projects