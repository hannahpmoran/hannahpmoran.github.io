import React from 'react';
import {Helmet} from "react-helmet";

// import components
import Footer from './Footer';

// import images
import headshot from '../Images/headshot_1.png';
import arrow from '../Images/arrow_back.png';

 
function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>about</title>
                <link rel="canonical" href="http://example.com/example" />
            </Helmet>

        <div style = {{display: 'flex', alignItems: 'center', padding: '5px', gap: '10px'}}> 
            <img src={arrow} alt='arrow'></img>
            <p style = {{ padding: '5px', height: '0'}}><i>bring me home</i></p>
        </div>

        <div style={{ textAlign: 'center',alignItems: 'flex-start' }}>
            <h1>about me</h1>
        </div>
            

            <div style={{ padding: '5px', display: 'flex', gap: '20px', justifyContent: 'space-evenly', }}>

                {/* Text */}
                <div>
                    <p>I am a Computer Science Major, Digital Arts and Humanities Minor at Carleton College in Northfield, Minnesota.</p>
                    <p>I am a Computer Science Major, Digital Arts and Humanities Minor at Carleton College in Northfield, Minnesota.</p>
                    <p>I am a Computer Science Major, Digital Arts and Humanities Minor at Carleton College in Northfield, Minnesota.</p>
                </div>

                {/* Image */}
                <img src={headshot} alt="black and white portrait" style={{ width: '30%', height: 'auto' }} />
                
            </div>

            {/* <div style={{ padding: '5px', height: '1500px' }}>
                <p>Keep scrolling...</p>
            </div> */}

        <Footer/>

        </div>
    );
}

export default About;