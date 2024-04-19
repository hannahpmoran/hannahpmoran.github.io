import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";


import coverPhoto from '../Images/film_photo_3.png';
import designImg from '../Images/map_1.png';
import photographyImg from '../Images/proj_pic_1.png';
import hciImg from '../Images/not_my_code_1.png';


import '../App.css';

import HeaderHome from './HeaderHome';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function Home() {

    const [showCover, setShowCover] = useState(true);

    // Add a scroll event listener to the window
    useEffect(() => {
        const handleScroll = () => {
            // Show the header if the user has scrolled down
            if (window.scrollY > 0) {
                setShowCover(false);
            } else {
                setShowCover(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div >

            <ScrollToTop /> 

            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
                <link rel="canonical" href="http://example.com/example" />
            </Helmet>


            {/* {hasScrolledTargetDistance && <Header />} */}

            {/* Main content */}
            <main>

            {/* Header */}
            {!showCover && <HeaderHome/>}

            {/* Background */}
            <img src={coverPhoto} alt="black and white film" style={{ width: '100%', opacity: '1'}}/>  


            {/* Overlayed Text Header*/}
            {showCover && <div> 

                <div style={{
                    position: 'fixed', // Absolute positioning within the container
                    top: '20%', // Position the text vertically at the middle
                    left: '50%', // Position the text horizontally at the middle
                    transform: 'translate(-50%, -50%)', // Center the text
                    color: 'black', // Set text color
                    fontSize: '2rem', // Adjust font size as needed
                    fontWeight: 'bold', // Adjust font weight as needed
                    textAlign: 'center', // Center-align the text
                    lineHeight: '0em'
                }}>
                    <p>the <i>digital </i></p>
                    <p>portfolio</p>
                </div>

                {/* Overlayed Text Footer*/}
                <div style={{
                    position: 'fixed', // Absolute positioning within the container
                    top: '90%', // Position the text vertically at the middle
                    left: '50%', // Position the text horizontally at the middle
                    transform: 'translate(-50%, -50%)', // Center the text
                    color: '#f4f4f4', // Set text color
                    fontSize: '1rem', // Adjust font size as needed
                    fontWeight: 'bold', // Adjust font weight as needed
                    textAlign: 'center', // Center-align the text
                    opacity: '0.7'
                }}>
                    <i>explore</i>
                </div>
                {/* <img src={scrollMoreArrow} alt = ''></img> */}
            </div> }

            
            {/*Divider Line*/}
            <div style={{ padding: '5px', height: '50px' }}></div>
            <div style={{ padding: '5px', borderTop: '2px solid black', width: '100%' }}></div>
            <div style={{ padding: '5px', height: '50px' }}></div>


            {/*Icons*/}
            <h2 style = {{
                textAlign: 'center',
                color: 'black',
            }}>view my <b>work</b>
            </h2>

            <div className="icon-nav-1" style={{
                position: 'relative', // Enable absolute positioning within the container
                width: '100%', // Adjust the width as needed
                height: 'auto', // Adjust the height as needed
                overflow: 'hidden', // Ensure the content does not overflow
                justifyContent: 'space-evenly',
                buffer: '5px'
            }}>
                
                <div>

                    {/*Design*/}
                    <div style={{
                        width: '100%', // The element should fill the container
                        height: '100%',  // Set a background color for demonstration
                        transition: 'filter 0.3s ease', // Transition for blur effect
                    }} className="hover-element">
                        <a href="/design">
                            <img src={designImg} alt="Page 1" className="icon" />
                            
                        </a>
                    </div>

                    {/* Text */}
                    {/* <div style={{
                        position: 'absolute', // Absolute positioning to overlay the text
                        top: 0, // Align to the top
                        left: 0, // Align to the left
                        width: '100%', // Match the width of the container
                        height: '100%', // Match the height of the container
                        display: 'flex', // Use flexbox layout for centering
                        justifyContent: 'center', // Center the text horizontally
                        alignItems: 'center', // Center the text vertically
                        color: 'white', // Set the text color
                        fontSize: '1.5rem', // Adjust the font size as needed
                        opacity: 1, // Initially hide the text
                        transition: 'opacity 0.3s ease', // Transition for text opacity
                    }} className="hover-text" >
                    Hovered Text
                    </div> */}
                    
                </div>

                {/*Photography*/}
                <div>
                <div style={{
                    width: '100%', // The element should fill the container
                    height: '100%', // Set a background color for demonstration
                    transition: 'filter 0.3s ease', // Transition for blur effect
                }} className="hover-element">
                    <a href="/photography">
                        <img src={photographyImg} alt="Page 2" className="icon" />
                    </a>
                </div>

                </div>
                
                {/*UI/UX*/}
                <div>
                <div style={{
                    width: '100%', // The element should fill the container
                    height: '100%', // Set a background color for demonstration
                    transition: 'filter 0.3s ease', // Transition for blur effect
                }} className="hover-element">
                    <a href="/uiux">
                        <img src={hciImg} alt="Page 3" className="icon" />
                    </a>
                </div>

                </div>
                

            </div>

            <div style={{ padding: '5px', height: '1500px' }}>
                <p>Keep scrolling...</p>
            </div>



            {/* Include the Footer component */}
            {!showCover && <Footer/>}
            

            </main>

        </div>
    );
}

export default Home;
