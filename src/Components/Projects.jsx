import React from 'react'
import "./Styles/Project.css"
import project from "../Images/project.png"

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
            <div>
              <img/>
            </div>
          </div>
          <div className='firstProject'></div>
          <div className='firstProject'></div>
          <div className='firstProject'></div>
        </div>
      </div>
    </div>
  )
}

export default Projects