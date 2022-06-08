import React from "react";
import "../Css/about.css"
import hero from "../images/hero.jpeg"
import html from "../images/grid/html5.png"
import css from "../images/grid/css.png"
import js from "../images/grid/javascript.png"
import jquery from "../images/grid/jquery.png"
import bootsrap from "../images/grid/bootstrap-logo.png"
import nodejs from "../images/grid/node-js-.png"
import expressjs from "../images/grid/express-logo.png"
import mongodb from "../images/grid/mongodb.jpg"
import github from "../images/grid/github.png"
import react from "../images/grid/react-logo.png"



export default function About() {
    return (
        <>
            <div className="aboutPage">
                <h1 className="head">About Me</h1>
                <div className="aboutBox">
                    <div>
                        <p className="desc aboutPara">Hello!! I'm Awdhesh  a FreeLancer, skilled in frontend web development.<br />

                            I love to draw thinking and thought on the web. I can make Landing Page from scratch based on ReactJs frontend Framework
                            and also know about backend, so I'm ready to explore
                            both front-end and back-end web development.
                        </p>
                    </div>
                    <div>
                        <img className="hero" src={hero} alt="" />
                    </div>

                </div>

            </div>
            <div className="skills">
                <h1 className="head">My Skills</h1>

                <div className="skills-center">
                    <div className="skills-grid">


                        <img className="html" src={html} alt='' />
                        <img className="css" src={css} alt='' />
                        <img className="bts" src={bootsrap} alt='' />
                        <img className="js" src={js} alt='' />
                        <img className="jq" src={jquery} alt='' /> <br />
                    </div>
                    <div className="skills-grid">
                        <img className="nd" src={nodejs} alt='' />
                        <img className="ex" src={expressjs} alt='' />
                        <img className="mnd" src={mongodb} alt='' />
                        <img className="react" src={react} alt='' />
                        <img className="git-hub" src={github} alt='' />
                    </div>
                </div>


            </div>
        </>
    );
}