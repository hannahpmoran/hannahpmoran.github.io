import React from 'react';
import { motion } from 'framer-motion';

// 
// import home from '../Images/home/homescreen.png';

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
                {/* TOP */}
                <div style = {{ height: '40%', width: '80%', textAlign: 'right', position: 'fixed', top: '0', paddingTop: '0px', paddingRight: '10px', right: '0'}}>
                    <div style = {{ textDecoration: 'line-through', fontSize: '30pt', color: '#182125'}}>
                        DIGITAL PORTFOLIO DIGITAL PORTFOLIO
                    </div>
                    
                    <div style = {{ fontSize: '80pt' }}>
                        <a href = '/' > DIGITAL PORTFOLIO</a>
                    </div>
                    <h1>HANNAH P MORAN</h1>

                    
                </div>
            </main>
        </motion.div>
    );
}

export default Home;
