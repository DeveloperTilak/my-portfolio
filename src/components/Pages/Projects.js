import React from 'react'

import Carousel from "react-elastic-carousel";
import Item from "../Data/Item";
import "../Css/project.css";
import Img from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";

import { FaGithub } from "react-icons/fa";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

export default function Projects() {
  return (
    <div className="App">
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img className='img'
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt="im"
            />
            <h3>Daily-Journal</h3>
            <p>Yov will able to add title and also description.</p>
            <button>
            <a href="https://www.linkedin.com/in/developer-awdhesh/">
            <FaGithub className='git' />
            </a>
            </button>
          </Item>
          <Item>
          <img className='img' src={Img2} alt="img" />

            <h3>To-Do Website.</h3>
            <p>It can store data and update, remove and add feature are available.</p>
             <br /> <p>Go to site.</p>
            <button>
            <a href="https://www.linkedin.com/in/developer-awdhesh/">
            <FaGithub className='git' />
            </a>
            </button>
          </Item>
          <Item>
          <img className='img' src={Img3} alt="img" />

            <h3>Drum-Sound</h3>
            <p>Basically, there are eight sound on each home button.</p>
            <button>
            <a href="https://www.linkedin.com/in/developer-awdhesh/">
            <FaGithub className='git' />
            </a>
            </button>
          </Item>
         
          <Item>
          <img className='img' src={Img} alt="img" />

            <h3>Sing-up Page</h3>
            <p>You can singup with email id and some details.</p>
            <button>
            <a href="https://www.linkedin.com/in/developer-awdhesh/">
            <FaGithub className='git' />
            </a>
            </button>
          </Item>
          <Item>
          <img className='img' src={Img} alt="img" />

            <h3>Weather-App</h3>
            <p>To check tempreture of a city, you can enter city name.</p>
            <button>
            <a href="https://www.linkedin.com/in/developer-awdhesh/">
            <FaGithub className='git' />
            </a>
            </button>
          </Item>
         
        </Carousel>
      </div>
    </div>
  );
}
