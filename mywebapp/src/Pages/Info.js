import React from 'react';
import { motion } from 'framer-motion';

// import images
// import linkedin from '../Images/linkedin.png';
// import github from '../Images/github.png';

 
function About() {
    return (
        <>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
        >

        <div style={{ textAlign: 'right', alignItems: 'flex-start', left: '200px' }} >
            <h1 style = {{padding: '10px' }}><a style = {{color: 'blue'}} href = 'info'>info</a></h1>
        
        <div>
            <ul style = {{textAlign: 'left', listStyleType: 'none', paddingLeft: '200px', paddingRight: '200px'}} >
                <li style = {{marginBottom: '10px'}} ><b>Designer. Developer.</b></li>
                <li style = {{marginBottom: '10px'}} >I am currently a senior at Carleton College majoring in Computer Science with a minor in Digital Arts and Humanities. I graduate in June of 2024.</li>
                <li style = {{marginBottom: '10px'}} >My passion for UI/UX design began when I first joined my college's <a style = {{fontWeight: 'bold'}} href = "https://carleton.hack4impact.org/" > Hack4Impact</a> chapter.
                                                        With a newfound enjoyment in computer science classes, the club got me thinking about the importance of design in modern software development. 
                                                        Not only did I enjoy the creative outlet, but I felt passionate about finding user-accessible designs and overcoming necessary obstacles to achieve this. 
                                                        Classes like Data Visualization and Software Design allowed me to formally study effective design practices, and personal projects allowed me to execute them.</li>
                <li style = {{marginBottom: '10px'}} >With a focus on user-centered technology, and a background in cryptographic studies, my senior thesis centered around Penetration Testing and Password Security. 
                                                        Along with two other members, we built an intentionally vulnerable website to study and inform dangerous ...</li>
                <li style = {{marginBottom: '10px'}} >For my minor in Digital Arts and Humanities, I studied a new wave of UI/UX design principles in a very modern context.</li>
                <li style = {{marginBottom: '10px' }}>Don't be a stranger. <a style = {{color: 'darkgray'}} href = "https://www.linkedin.com/in/hannah-p-moran/">Linkedin.</a> <a style = {{color: 'darkgray'}} href = "https://github.com/hannahpmoran">Github.</a> </li>
                <li><div></div></li>
            </ul>
        </div>

        </div>
        </motion.div>
        </>
    );
}

export default About;