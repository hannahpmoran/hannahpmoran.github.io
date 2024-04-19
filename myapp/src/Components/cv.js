import React from 'react';
import Header from './Header';
import {Helmet} from "react-helmet";

 
const Cv = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>cv</title>
                <link rel="canonical" href="http://example.com/example" />
            </Helmet>

            <Header />

        <div style={{ padding: '5px' }}>
            <h2>cv</h2>
        </div>

        <div style={{ padding: '5px', height: '1000px' }}>
            <p>Keep scrolling...</p>
        </div>

        </div>
    );
   };

export default Cv;