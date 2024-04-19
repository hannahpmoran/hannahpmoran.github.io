import React from 'react';
import headshot from '../Images/headshot_1.png';
import Header from './Header';
 
function About() {
    return (
        <div>
            <Header />
        <div style={{ padding: '5px' }}>
            <h2>about me</h2>
        </div>
            

            <div style={{ padding: '5px', display: 'flex', gap: '20px' }}>

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

        </div>
    );
}

export default About;