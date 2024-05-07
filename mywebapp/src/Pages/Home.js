import React from 'react';
import { motion } from 'framer-motion';

// 
import home from '../Images/home/homescreen.png';

function Home() {
    return (
        <motion.div 
            className='home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
                
            {/* Main content */}
            <main>
                <h1 style = {{position: 'fixed', right: '0', paddingRight: '10px', fontWeight: '1', fontSize: '50px', margin: '0'}}>the digital portfolio</h1>
                {/* <img src = {home} style = {{width: '100%', 
                height: 'auto',
                top: '0px' ,
                paddingLeft: '100px'}}
                alt = 'background for the digital portfolio'></img> */}
            </main>
        </motion.div>
    );
}

export default Home;
