import React from 'react';
 
function Code() {
    return (
        <>
        <div style={{ textAlign: 'right', alignItems: 'flex-start', left: '200px',}}>
            <h1 style = {{padding: '10px'}}><a style = {{color: 'blue'}} href = 'work' >work</a></h1>     
                
            <div>

                <ul style = {{textAlign: 'right', listStyleType: 'none', paddingLeft: '200px', paddingRight: '10px'}} >
                
                {/* Intercepted */}
                <li>
                    <p style = {{margin: '0'}}><a className="hover-effect" href = 'https://www.google.com/'>Mapping Intercepted Radio Communication in World War II</a></p>
                        <p style = {{margin: '0', paddingBottom: '50px'}}>
                        Culminating project for <i>DGAH 210: Spatial Humanities</i>.
                        </p>
                </li>

                {/* Hacking */}
                <li>
                    <p style = {{margin: '0'}}><a className="hover-effect" href = 'https://www.google.com/'>Hackable Machines</a></p>
                        <p style = {{margin: '0', paddingBottom: '50px'}}>
                        Computer Science Major Senior Capstone.
                        </p>
                </li>

                {/* CarlMart */}
                <li>
                    <p style = {{margin: '0'}}><a className="hover-effect" href = 'https://www.google.com/'>CarlMart: Digital Marketplace</a></p>
                        <p style = {{margin: '0', paddingBottom: '50px'}}>
                        Software Engineering Internship over winter break.
                        </p>
                </li>

                {/* Intercepted */}
                <li>
                    <p style = {{margin: '0'}}><a className="hover-effect" href = 'https://www.google.com/'>Scheme Interpreter in C</a></p>
                        <p style = {{margin: '0', paddingBottom: '50px'}}>
                        Culminating project for <i>CS 251: Programming Languages Design and Implementation</i>.
                        </p>
                </li>

                {/* Ivy */}
                <li>
                    <p style = {{margin: '0'}}><a className="hover-effect" href = 'https://www.google.com/'>Ivy: Interactive Robot</a></p>
                        <p style = {{margin: '0', paddingBottom: '50px'}}>
                        Culminating project for <i>CS 232: Art, Interactivity, and Microcontrollers</i>.
                        </p>
                </li>

                {/* Portraits */}
                <li>
                    <p style = {{margin: '0'}}><a className="hover-effect" href = 'https://www.google.com/'>Signed Portaits: Constructed</a></p>
                        <p style = {{margin: '0', paddingBottom: '50px'}}>
                        Culminating project for <i>ARTS 200: Constructed Image</i>.
                        </p>
                </li>

                {/* Portraits */}
                <li>
                    <p style = {{margin: '0'}}><a className="hover-effect" href = 'https://www.google.com/'>Hole in the Family</a></p>
                        <p style = {{margin: '0', paddingBottom: '50px'}}>
                        Series of photos for <i>ARTS 200: Constructed Image</i>.
                        </p>
                </li>
                
                
                </ul>
            
            </div>

        </div>
        </>
    );
}

export default Code;