import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HeaderHome() {
    return (
        <header style={{ padding: '5px', backgroundColor: '#f4f4f4' }}>
        <div style={{ position: 'dynamic', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo or Site Title */}
            <div>
                <Link to='/'><h1 style = {{ color: 'black' }}>hm.</h1></Link>
            </div>

            {/* Navigation Links */}
            <div style={{ position: 'dynamic', right: '0'}}>
                <nav>
                    <Link to="/about" style={{ color: 'black', position: 'right', marginRight: '10px'}}>about</Link>
                    <Link to="/portfolio" style={{ color: 'black', position: 'right', marginRight: '10px' }}>portfolio</Link>
                    <Link to="/cv" style={{ color: 'black', position: 'right', marginRight: '10px' }}>cv</Link>
                </nav>
            </div>
        </div>
        <div style={{ borderTop: '2px solid black', width: '100%' }}></div>
    </header>

    );
}

export default HeaderHome;