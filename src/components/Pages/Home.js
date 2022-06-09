import React from 'react'
import { Link } from 'react-router-dom';

import bg1 from "../images/bg1.jpg";
import "../Css/home.css"

export default function Home() {
  return (
    <>
    <img className='homeImg' src={bg1} alt="img" />
    <div className='homePage'>
    <div className='title-left'>
      <p className='para'>Hello! There</p>
      <h1 className='heading'>My Name is <span className='name'>Awdhesh</span></h1>
      <h2 className='heading1'>I'm Web Developer <span className='span1'> | FreeLancer.</span></h2>
       <p className='para1'>and I'm so extcited to learn to new</p>
       <p className='para1'> things by practically</p>
       <p className='para2'>SCROLL <span className='span'>&#8595;</span></p>

    </div>

    <div className='button-right'>
      <button className='button bt-2'><Link to="/projects" className='projects btn'><li>Projects</li> </Link>
     </button>
     <button className='button bt-2'> 
        <Link to="/contact" className='contact btn' ><li>Contact</li> </Link>
      </button>
    </div>

    </div>
    </>

  )
}
