import React from 'react';

// import images

// rc images
import RCHome from '../Images/Design/RC_home.png';
import RCNav from '../Images/Design/RC_nav.png';
import RCStation from '../Images/Design/RC_stationmap.png';
import RCDynamic from '../Images/Design/RC_dynamicmap.png';

// carlmart images
import CMIA from '../Images/Design/carlmart_ia.png';
import CMSignIn from '../Images/Design/CM_sign_in_page.png';
import CMCreateAccount from '../Images/Design/CM_create_account_page.png';
import CMHomepage from '../Images/Design/CM_homepage_version_3.png';
import CMListingView from '../Images/Design/CM_listing_view_version_2.png';
import CMSellerView from '../Images/Design/CM_view_seller_profile.png';

// carlmart images
import MGAHome from '../Images/Design/MGA_home.png';
import MGAActivities from '../Images/Design/MGA_activities.png';
import MGAMap from '../Images/Design/MGA_map.png';
import MGATimeline from '../Images/Design/MGA_timeline.png';

 
function Design() {
    return (
        <>
        <div style={{ textAlign: 'right', alignItems: 'flex-start', left: '200px',}}>
            <h1 style = {{padding: '10px'}}><a style = {{color: 'blue'}} href = 'design' >design</a></h1>
        
        <div>
            <ul style = {{textAlign: 'left', listStyleType: 'none', paddingLeft: '200px', paddingRight: '200px'}} >
            
            {/* Interception Web */}
            <li style = {{marginBottom: '10px', padding: '5px'}}>
                <h2>Intercepted Radio Communication in World War II</h2>
                    <span>
                    This StoryMap project was my culminating work for the class <i>Spatial Humanities, DGAH 210</i>.
                    As the sole author of the project, I not only transcribed several intercepted radio messages, but led the website design using StoryMaps framework.  
                    Visualizing radio communication on an ARCGis map was challenging, but the process taught me a lot. I learned what icons work best to incentivise user interaction. 
                    I also learned how to create an original, readable, and stylized base map to represent data over. 
                    
                    </span>
                        
                    <p ><a style = {{color: 'gray'}} href = 'https://dgah-210-carleton.hub.arcgis.com/apps/carleton::intercepted-radio-communication-in-world-war-ii-/explore' ><u>Project StoryMap Site.</u></a></p>
                    
                    <div style = {{width: '90%', paddingLeft: '80px'}}>
                        <span>Home Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {RCHome} alt = 'sign in page'></img>

                        <span>Navigating the Site</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {RCNav} alt = 'create account page'></img>

                        <span>Radio Interception Station Map Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {RCStation} alt = 'home page'></img>

                        <span>Interactive Intercepted Radio Communication Data Map Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {RCDynamic} alt = 'listing view page'></img>
                    </div>
                </li>

                {/* Carl Mart */}
                <li style = {{marginBottom: '10px', padding: '5px'}}>
                <h2>CarlMart</h2>
                    <span>
                    CarlMart is an online marketplace created by a small team of student developers during a two-week internship over winter break. 
                    With a simple design that utilizes Carleton school colors, Maize and Blue, the platform provided our team with real-world software development experience. 
                    I led the interface design of the website, and contributed to frontend development.
                    Below, I have included exported Figma designs for the website that were implemented in the first iteration of the marketplace site. I also included the Information Architecture, or logical flow, of the website.
                    </span>
                        
                    <p ><a style = {{color: 'gray'}} href = 'https://github.com/BNwike47/CarlMart-SWEexternship' ><u>Project Github.</u></a></p>
                    
                    <div style = {{width: '90%', paddingLeft: '80px'}}>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {CMIA} alt = 'information architecture'></img>
                        <span>Sign In Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {CMSignIn} alt = 'sign in page'></img>

                        <span>Create Account Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {CMCreateAccount} alt = 'create account page'></img>

                        <span>Home Page Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {CMHomepage} alt = 'home page'></img>

                        <span>Listing View Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {CMListingView} alt = 'listing view page'></img>

                        <span>Seller View Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {CMSellerView} alt = 'seller view page'></img>
                    </div>
                </li>

            {/* Modern Guide to Arb Web */}
            <li style = {{marginBottom: '10px', padding: '5px'}}>
                <h2>Modern Guide to Carleton's Arboretum</h2>
                    <span>

                    </span>
                        
                    <p ><a style = {{color: 'gray'}} href = 'https://hhfinals.dgah.sites.carleton.edu/arb-today/' ><u>Project StoryMap Site.</u></a></p>
                    
                    <div style = {{width: '90%', paddingLeft: '80px'}}>
                        <span>Home Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {MGAHome} alt = 'sign in page'></img>

                        <span>Interactive Trail Map Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {MGAMap} alt = 'home page'></img>

                        <span>Interactive Arboretum Timeline Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {MGATimeline} alt = 'listing view page'></img>

                        <span>Activities Photography Showcase Screen</span>
                        <img style = {{width: '100%', marginBottom: '10px'}} src = {MGAActivities} alt = 'create account page'></img>
                    </div>
                </li>

            </ul>
            
        </div>
        </div>
        </>
    );
}

export default Design;