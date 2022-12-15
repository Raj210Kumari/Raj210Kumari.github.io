
import './App.css';
import React from 'react'
import { Home } from './Components/Home';


import Navbar from "./Components/Navbar"
import { AboutMe } from './Components/AboutMe';
import { Skills } from './Components/Skills';
import Projects from './Components/Projects';
import {Contact} from './Components/Contact';
import { GithubStats } from './Components/GithubStats';

function App() {
  return (
    <div >
      <React.Fragment>
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Skills/>
        <GithubStats/>
        <Projects/>
        <Contact/>
      </React.Fragment>
    </div>
  );
}

export default App;
