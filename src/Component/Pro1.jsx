import React from "react";
import Image from './Shin.png';
function pro1(){
    return(
        <>
        <div className="outer">
            <div className="inner">
                <nav className="navbar">
                    <ul>
                        <li>
                            <div className="nk">Nithish Kanna</div>
                        </li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>
                            <button className="but">Resume</button>
                        </li>
                    </ul>
                </nav>
                <div className="cont">
                    <h2>Hello,</h2>
                    <h1>I am Nithish.</h1>
                    <p1>UI/UX Designer</p1>
                    <p>
                        Hello, I am an aspiring UI/UX Designer <br /> with the ability to translate the designs <br /> 
                        into functional Front-end
                    </p>
                    <button>Hire Me</button>
                </div>
                <div className="circle">
                    <img src={Image} alt="Profile" />
                </div>
            </div>
        </div>
        </>
    )
}

export default pro1
