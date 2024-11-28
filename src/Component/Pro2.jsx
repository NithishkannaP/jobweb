import React from "react";
import one from './Img/5706763.png';
import two from './Img/6024190.png';
import three from './Img/6034988.png';
import four from './Img/download.jpeg';
import five from './Img/download.png';
import one1 from './Img/1.png';
import two1 from './Img/2.png';
import two2 from './Img/2.1.png';
import three1 from './Img/3.png';
import three2 from './Img/2.png';
import four1 from './Img/4.png';
import four2 from './Img/4.1.png';
import five1 from './Img/5.png';

function Pro2() {
    return (
        <div className="body">
    
        <div className="txt">
        <p1><span className="On">Best Developers</span> On The Planet</p1>
        <p>This Product integrates with your favorite apps to automate workflows and <br/>ensure smooth, productive work
            days.</p>
        <div className="container">
            <div className="box1">
                <img width="100px" src={one}/>
                <h1>Dan Burykin</h1>
                <p>VueJS Developer</p>
                <img width="40px" src={one1}/>
            </div>
            <div className="box2">
                <img width="100px" src={two}/>
                <h1>Esi Doda</h1>
                <p>Software Developer</p>
                <img width="40px" src={two1}/>
                <img width="40px" src={two2}/>
            </div>
            <div className="box3">
                <img width="100px" src={three}/>
                <h1>Alex Harper</h1>
                <p>RN Executive</p>
                <img width="40px" src={three1}/>
                <img width="40px" src={three2}/>
            </div>
            <div className="box4">
                <img width="100px" src={four}/>
                <h1>Amarna Miller</h1>
                <p>frontend Wizard</p>
                <img width="40px" src={four1}/>
                <img width="40px" src={four2}/>
            </div>
            <div className="box5">
                <img width="100px" src={five}/>
                <h1>Jessica Stoyadinovich</h1>
                <p>Ember Master</p>
                <img width="40px" src={five1}/>
            </div>
        </div>
    </div>
    
        </div>
    )
}
export default Pro2

