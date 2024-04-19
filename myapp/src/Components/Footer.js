import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#F7F4EF', textAlign: 'center', class: 'footer' , position: 'fixed', bottom: 5, width: '100%' }}>
            {/* <p>&copy; {new Date().getFullYear()} Hannah Moran</p> */}
            <Link to="/contact" style={{ marginRight: '10px' }}>Contact Page</Link>
        </footer>

    );
}

export default Footer;
