import React from "react";
import Image from './Img/logo.png';
import pic1 from './Img/pic1.png';
import pic2 from './Img/pic2.png';
import pic3 from './Img/pic3.png';
import pic4 from './Img/pic4.png';
import pic5 from './Img/pic5.png';

function Figma() {
    return (
        <>
            <div className="body">
                <div className="top">
                    <nav className="navbar">
                        <ul>
                            <li className="go">GoTrieop</li>
                            <div className="home">
                                <li>Home</li>
                                <li>Services</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </div>
                            <li className="sign">Sign up</li>
                            <button>Login</button>
                    </ul>
                    </nav>
                    <div className="bd">
                        <img className="img" src={Image}></img>
                        <h2>Explore The Natural <br />Beauty Of Halmahera<br />With Us</h2>
                        <p>explore the beauty of god's earth in a <br />beautiful forest and have fun</p>
                        <button className="exp">Explore Now</button>
                    </div>
                </div>
                <div className="choice">
                    <h4>Choice of</h4>
                    <h2>Destinations</h2>
                    <div className="circle"><div className="arrow"></div></div>
                    <div className="img1">
                        <img className="one" src={pic1} />
                        <img className="two" src={pic2} />
                        <img src={pic3} />
                    </div>
                    <p>explore the beauty of god's earth in <br />a beautiful forest and have fun</p>
                    <button>Explore Now</button>
                </div>
                <div className="custom">
                    <img src={pic4} />
                    <h4>What do customers say<br />about us?</h4>
                    <h5>Alpanasap</h5>
                    <div className="circle1"><img className="hum" src={pic5} /></div>
                    <p1>Japung,Indonesia</p1>
                    <p>Very satisfying service makes it<br />comfortable, a beautiful place in the world.</p>
                    <div className="star"></div>
                    <div className="star1"></div>
                    <div className="star2"></div>
                    <div className="star3"></div>
                    <div className="star4"></div>
                </div>
                <div className="box">
                    <h3>Prepare Yourself And<br />Start Exploring With Us.</h3>
                    <p>There's the best discount for you today.</p>
                    <button>Get Started</button>
                </div>
                <div className="bot">
                    <h3>Subscribe<br />To Our Newsletter</h3>
                    <div className="sub">
                        <input type="text" placeholder="Yourmail@mail.com" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <nav className="footer">
                    <ul>
                        <li className="go1">GoTrieop</li>
                        <div className="home1">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </div>
                        <li className="sign1">Sign up</li>
                        <button>Login</button>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Figma