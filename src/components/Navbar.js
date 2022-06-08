import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
import CoustomLink from "./CoustomLink"
import "../styles.css"

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <div className='homeNav'>
    <nav className='navbar'>
    <div className='logo'>Portfo<span>lio</span></div>
    <ul className={isMobile ? "nav-links-mobile" :"nav-links"}
        onClick={() => setIsMobile(false)}
    >
        <CoustomLink to="/" className='home'> Home </CoustomLink>
        <CoustomLink to="/services" className='services' > Services  </CoustomLink>
        <CoustomLink to="/projects" className='projects'> Projects  </CoustomLink>
        <CoustomLink to="/about" className='about'> About  </CoustomLink>
        <CoustomLink to="/contact" className='contact'> Contact  </CoustomLink>
       
    </ul>
    <button className='mobile-menu-icon'
        onClick={()=> setIsMobile(!isMobile)}
    >
        {isMobile ? <i className='fas fa-times'></i>:<i className='fas fa-bars'></i>}
    </button>

    </nav>
    </div>
  )
}
