
import './App.css';
import React from 'react'
import { Home } from './Components/Home';


import Navbar from "./Components/Navbar"
import { AboutMe } from './Components/AboutMe';
import { Skills } from './Components/Skills';
import Projects from './Components/Projects';
import {Contact} from './Components/Contact';

function App() {
  return (
    <div >
      <React.Fragment>
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
      </React.Fragment>
    </div>
  );
}

export default App;
