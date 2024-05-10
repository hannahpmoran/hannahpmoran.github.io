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

        <div style={{ textAlign: 'right', alignItems: 'flex-start' }} >
        {/* <p style={{ fontSize: '25px',padding: '30px', fontWeight: '1', color: 'blue'}}>ABOUT ME</p> */}
        
        <div>
            <ul style = {{textAlign: 'left', listStyleType: 'none'}} >
                <li style = {{marginBottom: '10px', fontSize: '25px'}} ><b>this is a title.</b></li>
                <li style = {{marginBottom: '10px'}} >I am currently a senior at Carleton College majoring in Computer Science with a minor in Digital Arts and Humanities. I graduate in June of 2024.</li>
                <li style = {{marginBottom: '10px'}} >My passion for UI/UX design began when I first joined my college's <a style = {{fontWeight: 'bold'}} href = "https://carleton.hack4impact.org/" > Hack4Impact</a> chapter.
                                                        With a newfound enjoyment in computer science classes, the club got me thinking about the importance of design in modern software development. 
                                                        Not only did I enjoy the creative outlet, but I felt passionate about finding user-accessible designs and overcoming necessary obstacles to achieve this. 
                                                        Classes like Data Visualization and Software Design allowed me to formally study effective design practices, and personal projects allowed me to execute them.</li>
                <li style = {{marginBottom: '10px'}} >With a focus on user-centered technology, and a background in cryptographic studies, my senior thesis centered around Penetration Testing and Password Security. 
                                                        Along with two other members, we built an intentionally vulnerable website to study and inform dangerous ...</li>
                <li style = {{marginBottom: '10px'}} >For my minor in Digital Arts and Humanities, I studied a new wave of UI/UX design principles in a very modern context.</li>
                <li><div></div></li>
            </ul>
        </div>

        </div>
        </motion.div>
        </>
    );
}

export default Info;