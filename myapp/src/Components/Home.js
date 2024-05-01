import React from 'react';

// import components
import ScrollToTop from './ScrollToTop';

// import style
import '../App.css';

//import
import home from '../Images/homescreen.png';

function Home() {

    return (
        <>
            {/* Scroll to top component */}
            <ScrollToTop /> 

            {/* Main content */}
            <main>
            <img style = {{width: '100%', height: 'auto', top: '0px', paddingLeft: '100px'}}src = {home} alt = 'background'></img>
            </main>

        </>
    );
}

export default Home;
