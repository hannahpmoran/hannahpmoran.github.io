import React from 'react';
import { Link } from 'react-router-dom';

// import style
import '../App.css';

function Footer() {
    return (
        <footer style={{ padding: '10px', backgroundColor: '#F7F4EF', textAlign: 'center', class: 'footer' , position: 'fixed', bottom: 0, width: '100%', opacity: 0.4 }}>
            {/* <p>&copy; {new Date().getFullYear()} Hannah Moran</p> */}
            <Link to="/contact" style={{ marginRight: '10px' }}>don't be a stranger</Link>
        </footer>

    );
}

export default Footer;
