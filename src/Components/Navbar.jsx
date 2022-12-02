import React from 'react'
import {useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import './Styles/Navbar.css';

const Navbar = () => {
    const navRef=useRef()

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <div>
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#work">My work</a>
                <a href="/#blog">Blog</a>
                <a href="/#about">About Me</a>
                <button className='="nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav> 
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    </div>
  )
}

export default Navbar