import React from 'react'
import "../Css/services.css"
export default function Services(props) {
  return (
    <div>
      <h1 className='servicesPage'>{props.heading}</h1>
        <div className='box-1'>
          <img src={props.image} alt=''/>
          <h2>{props.work}</h2>
          <p>{props.desc}</p>
        
         </div>

      </div>

  )
}
