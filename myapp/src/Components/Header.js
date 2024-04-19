import React from 'react';
import { Link } from 'react-router-dom';

// import style
import '../App.css';

function HeaderHome() {
    return (
        <header style={{ padding: '5px', backgroundColor: '#f4f4f4' }}>
        <div style={{ position: 'dynamic', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo or Site Title */}
            <div>
                <Link to='/'><h1 style = {{ color: 'black', lineHeight: '0em' }}>hm.</h1></Link>
            </div>

            {/* Navigation Links */}
            <div style={{ position: 'dynamic', right: '0'}}>
                <nav>
                    <Link to="/about" style={{ color: 'black', position: 'right', marginRight: '10px'}}>about</Link>
                    <Link to="/contact" style={{ color: 'black', position: 'right', marginRight: '10px' }}>contact</Link>
                    <Link to="https://drive.google.com/file/d/1xQjBmGY8R84_w-audeARdjOIfOKaq9H1/view?usp=sharing" style={{ color: 'black', position: 'right', marginRight: '10px' }}>cv</Link>
                </nav>
            </div>
        </div>
        <div style={{ borderTop: '2px solid black', width: '100%' }}></div>
    </header>

    );
}

export default HeaderHome;