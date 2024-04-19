import React from 'react';
import {Helmet} from "react-helmet";
 
function Portfolio() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>portfolio</title>
                <link rel="canonical" href="http://example.com/example" />
            </Helmet>

            <div style={{ padding: '5px' }} >
                <h2>portfolio</h2>
            </div>

            <div style={{ padding: '5px', height: '1500px' }}>
                <p>Keep scrolling...</p>
            </div>

        </div>
        
    );
}

export default Portfolio;