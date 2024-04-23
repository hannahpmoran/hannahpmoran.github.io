import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {Helmet} from "react-helmet";

// import components
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import HoverIcon from './HoverIcon';
import IDCard from './IDCard';

// import style
import '../App.css';

// import images
// import coverPhoto from '../Images/film_photo_3.png';
import headshot from '../Images/headshot_1.png';
import designImg from '../Images/proj_pic_1.png';
import photographyImg from '../Images/photography.png';
import hciImg from '../Images/ivy.jpg';
import coverPhoto2 from '../Images/PhotographyGallery/walker_6.jpg';
import vibesPhoto from '../Images/PhotographyGallery/pa6_7.png';

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

        // State variable to track hover state
    // const [isHovered, setIsHovered] = useState(false);

    // Event handler for when the mouse enters the element
    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // };

    // Event handler for when the mouse leaves the element
    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // };

    return (
        <div >

            <ScrollToTop /> 

            {/* Main content */}
            <main>

            {/* Image with conditional blur effect */}
            <img
                src={coverPhoto2}
                alt="black and white film"
                style={{
                    width: '100%', // Make the image fill the container
                    height: 'auto', // Maintain aspect ratio
                    filter: !showCover ? 'blur(3px)' : 'none', // Apply blur effect based on scroll position
                    transition: 'filter 0.3s ease', // Smooth transition for blur effect
                }}
            />


            {/* Overlayed Text Header*/}
            {<div> 

                {/* <div style={{
                    position: 'absolute', // Absolute positioning within the container
                    top: '25%', // Position the text vertically at the middle
                    left: '20%', // Position the text horizontally at the middle
                    transform: 'translate(-50%, -50%)', // Center the text
                    color: 'black', // Set text color
                    fontSize: '3rem', // Adjust font size as needed
                    fontWeight: 'bold', // Adjust font weight as needed
                    textAlign: 'left', // Center-align the text
                    lineHeight: '0em',
                    filter: !showCover ? 'blur(3px)' : 'none', // Apply blur effect based on scroll position
                    transition: 'filter 0.3s ease' // Smooth transition for blur effect
                }}>
                    <p >the digital</p>
                    <p>portfolio</p>
                </div> */}

                {/* Overlayed Text Footer*/}
                {/* <div className="bounce-text" style={{
                    position: 'absolute', // Absolute positioning within the container
                    top: '85%',  // Position the text horizontally at the middle
                    right: '50%',
                    transform: 'translate(-50%, -50%)', // Center the text
                    color: '#f4f4f4', // Set text color
                    fontSize: '1rem', // Adjust font size as needed
                    fontWeight: 'bold', // Adjust font weight as needed
                    textAlign: 'center', // Center-align the text
                    lineHeight: '0em',
                    opacity: '0.7',
                    filter: !showCover ? 'blur(3px)' : 'none', // Apply blur effect based on scroll position
                    transition: 'filter 0.3s ease' 
                }}>
                    <p>explore</p> */}
                {/* </div> */}

            </div> }

            <div style={{ padding: '5px', height: '50px' }}></div>


            {/*Icons*/}
            {/* <h2 style = {{
                textAlign: 'left',
                color: 'black', 
                fontSize: '2rem',
                lineHeight: '0em' }}>
              work
            </h2>
            
            <div style = {{display: 'flex', justifyContent: 'space-between'}} > 
            <ul className = 'item-list' >
                <li className='item' >photography</li>
                <li className='item' >design</li>
                <li className='item' >code</li>
            </ul>
            <img src={vibesPhoto} style = {{width: '200px', height: '100%', paddingRight: '20px'}}/> 
            </div>

            <div style= {{height: '2px', backgroundColor: 'black', margin: '5px' }} ></div> */}

            {/*Divider Line*/}
            {/* <div style={{ padding: '0px', height: '0px' }}></div>
            <div style={{ padding: '5px', borderTop: '2px solid black', width: '100%' }}></div>
            <div style={{ padding: '5px', height: '20px' }}></div> */}

            {/*ICON NAV BAR DIV*/} 
            {/* <div className='icon-nav-1 '>
            <Link to='/photography'>
                <HoverIcon
                iconContent={ <a href="/photography"><img src={photographyImg} alt="photography" className="icon" /></a>}
                hoverText={"PHOTOGRAPHY"}
                style = {{}}
                />
            </Link> */}

            {/* <Link to='/design'>
                <HoverIcon
                iconContent={ <a href="/design"><img src={designImg} alt="design" className="icon" /></a>}
                hoverText={"DESIGN"}
                style = {{}}
                />
            </Link> */}

            {/* <Link to='/code'>
                <HoverIcon
                iconContent={ <a href="/code"><img src={hciImg} alt="code" className="icon" /></a>}
                hoverText={"CODE"}
                style = {{}}
                />
            </Link> */}
            {/* </div>

            <div style={{ padding: '5px', height: '50px' }}></div>
                */}
            {/*Quick About*/}
            {/* <h2 style = {{
                textAlign: 'center',
                color: 'black', 
                fontSize: '3rem',
                lineHeight: '0em'
             }}>
            me
            </h2> */}

             {/*Divider Line*/}
            {/* <div style={{ padding: '0px', height: '0px' }}></div>
            <div style={{ padding: '5px', borderTop: '2px solid black', width: '100%' , alignItems: 'center'}}></div>
            <div style={{ padding: '5px', height: '20px' }}></div> */}

            {/* <IDCard 
                profilePicture={headshot}
                name="Hannah P Moran"
                bio="A Computer Science Major, Digital Arts and Humanities Minor at Carleton College.
                A Computer Science Major, Digital Arts and Humanities Minor at Carleton College.
                A Computer Science Major, Digital Arts and Humanities Minor at Carleton College.
                A Computer Science Major, Digital Arts and Humanities Minor at Carleton College.
                A Computer Science Major, Digital Arts and Humanities Minor at Carleton College.
                A Computer Science Major, Digital Arts and Humanities Minor at Carleton College.
                A Computer Science Major, Digital Arts and Humanities Minor at Carleton College."
                style = {{alignItems: 'center', justifyContent: 'center', margin: 'auto'}}
            /> */}

            <div style={{ padding: '5px', height: '50px' }}></div>

            {/* Include the Footer component */}
            {!showCover && <Footer/>}
        
            </main>

        </div>
    );
}

export default Home;
