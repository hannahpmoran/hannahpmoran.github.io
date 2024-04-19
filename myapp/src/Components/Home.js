import React, { useState, useEffect } from 'react';
import coverPhoto from '../Images/film_photo_1.png';
import '../App.css';
import HeaderHome from './HeaderHome';
//import Header from './Header';
import Fade from '@material-ui/core/Fade';
import scrollMoreArrow from '../SVGs/expand_more.svg';

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
            {!showCover && <HeaderHome/>}

            {/* {hasScrolledTargetDistance && <Header />} */}

            {/* Main content */}
            <main>

                {/* Image */}
                <img src={coverPhoto} alt="black and white film" style={{ width: '100%'}}/>  

            <div style={{ height: '1500px' }}>
                <p>Keep scrolling...</p>
            </div>

                {/* Overlayed Text Header*/}
            {showCover && <div> 

                <div style={{
                    position: 'fixed', // Absolute positioning within the container
                    top: '5%', // Position the text vertically at the middle
                    left: '30%', // Position the text horizontally at the middle
                    transform: 'translate(-50%, -50%)', // Center the text
                    color: 'black', // Set text color
                    fontSize: '1rem', // Adjust font size as needed
                    fontWeight: 'bold', // Adjust font weight as needed
                    textAlign: 'center' // Center-align the text
                }}>
                    welcome
                </div>

                {/* Overlayed Text Footer*/}
                <div style={{
                    position: 'fixed', // Absolute positioning within the container
                    top: '60%', // Position the text vertically at the middle
                    left: '50%', // Position the text horizontally at the middle
                    transform: 'translate(-50%, -50%)', // Center the text
                    color: '#f4f4f4', // Set text color
                    fontSize: '1rem', // Adjust font size as needed
                    fontWeight: 'bold', // Adjust font weight as needed
                    textAlign: 'center', // Center-align the text
                    opacity: '0.7'
                }}>
                    explore...
                </div>
                {/* <img src={scrollMoreArrow} alt = ''></img> */}
            </div> }

            </main>

        </div>
    );
}

export default Home;
