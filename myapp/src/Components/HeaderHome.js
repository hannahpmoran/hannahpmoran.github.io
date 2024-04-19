import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HeaderHome() {
    return (
        <header style={{ padding: '5px', backgroundColor: '#f4f4f4' }}>
        <div style={{ position: 'fixed', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo or Site Title */}
            <div>
                <Link to='/'><h1 style = {{ color: 'black' }}>hm.</h1></Link>
            </div>

            {/* Navigation Links */}
            <div style={{ position: 'fixed', right: '0'}}>
                <nav>
                    <Link to="/about" style={{ position: 'right', marginRight: '10px'}}>about</Link>
                    <Link to="/portfolio" style={{ position: 'right', marginRight: '10px' }}>portfolio</Link>
                    <Link to="/cv" style={{ position: 'right', marginRight: '10px' }}>cv</Link>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default HeaderHome;