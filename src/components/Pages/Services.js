import React from 'react'
import "../Css/services.css"
import single from "../images/Web services.jpg";
import multi from "../images/Web services2.jpg";

export default function Services() {
  return (
    <div className='PageService'>
      <h1 className='head'> My efficient services. </h1>
      <div className='service-box'>
        <div  className='box-1'>
        <img className='services-img single' src={single} alt=''/>
        <h2 className='work'>Single Page</h2>
        <p className='desc singleDesc'>I would love to make Websites using <br /> HTML, CSS and Javascript based.</p>
        </div>

        <div className='box-2'>
        <img className='services-img multi' src= {multi} alt=''/>
        <h2 className='work'>Multi-Page</h2>
        <p className='desc multiDesc'> So intresting to build Multipage Website <br /> using ReactJs Framework.</p>
        </div>
      </div>
      
        

      </div>

  )
}
