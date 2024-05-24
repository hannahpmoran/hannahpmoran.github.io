import React from 'react';
import { motion } from 'framer-motion';

// import images
// import linkedin from '../Images/linkedin.png';
// import github from '../Images/github.png';

 
function Info() {
    return (
        <>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
        >

        {/* TOP */}
        <div style = {{ alignItems: 'flex-start', height: '40%',  textAlign: 'right',  top: '0', paddingTop: '0px', paddingLeft: '20%', paddingRight: '10px', right: '0'}}>
                    <div style = {{ textDecoration: 'line-through', fontSize: '30pt', color: '#182125'}}>
                        INFO INFO INFO INFO
                    </div>
                <ul style = {{textAlign: 'right', listStyleType: 'none', paddingRight: '10px'}} >
                <li style = {{marginBottom: '10px', fontSize: '25px'}} ><b>CONTACT</b></li>
                    <li style = {{marginBottom: '10px'}} ><a href = 'https://www.linkedin.com/in/hannah-p-moran/'>Linkedin ↗</a></li>
                    <li style = {{marginBottom: '10px'}} ><a href = 'https://www.linkedin.com/in/hannah-p-moran/'>Behance ↗</a></li>
                    <li style = {{marginBottom: '10px'}} ><a href = 'https://github.com/hannahpmoran'>Github ↗</a></li>
                    <li style = {{marginBottom: '10px'}} ><a href = 'https://www.flickr.com/photos/151245207@N08/albums'>Flickr ↗</a></li>
                    <li><div></div></li>
                </ul>
                
                <ul style = {{textAlign: 'right', listStyleType: 'none', paddingRight: '10px'}} >
                    <li style = {{marginBottom: '10px', fontSize: '25px'}} ><b>ABOUT</b></li>
                    <li style = {{marginBottom: '10px'}} >I am currently a senior at Carleton College majoring in Computer Science with a minor in Digital Arts and Humanities. I graduate in June of 2024.</li>
                    <li style = {{marginBottom: '10px'}} >My passion for UI/UX design began when I first joined my college's <a style = {{fontWeight: 'bold'}} href = "https://carleton.hack4impact.org/" > Hack4Impact</a> chapter.
                                                            With a newfound enjoyment in computer science classes, the club got me thinking about the importance of design in modern software development. 
                                                            Not only did I enjoy the creative outlet, but I felt passionate about finding user-accessible designs and overcoming necessary obstacles to achieve this. </li>                    
                   
                    <li><div></div></li>
                </ul>
        </div>
        
        <div>
            
        </div>

        </motion.div>
        </>
    );
}

export default Info;