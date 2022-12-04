import React from 'react'
import {useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import './Styles/Navbar.css';
import {Link} from "react-scroll"
import logo from "../Images/logo2.png"

const Navbar = () => {
    const navRef=useRef()

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <div id="navdiv">
        <header>
            <div id="navLogo">
                <img src={logo}/>
            </div>
            <div id="navContent">
                <nav ref={navRef} >
                    <a className="activeNav" href='/'><Link to="home" smooth={true} duration={100} offset={-100} spy={true}>Home</Link></a>
                    <a className="activeNav" href='/'><Link to="about" smooth={true} duration={100} offset={-100} spy={true}>About Me</Link></a>
                    <a className="activeNav" href='/'><Link to="skill" smooth={true} duration={100} offset={-100} spy={true}>Skills</Link></a>
                    <a className="activeNav" href='/'><Link to="project" smooth={true} duration={100} offset={-100} spy={true}>Project</Link></a>
                    <a className="activeNav" href='/'><Link to="contact" smooth={true} duration={100} offset={-100} spy={true}>Contact</Link></a>
                    <button className='="nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav> 
            </div>
            <div id="navCloseBtn">
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    </div>
  )
}

export default Navbar