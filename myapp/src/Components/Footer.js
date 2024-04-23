import React from 'react';
import { Link } from 'react-router-dom';

// import style
import '../App.css';

// import images
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

function Footer() {
    return (
        <footer style={{ padding: '10px', backgroundColor: '#F7F4EF', textAlign: 'center', class: 'footer' , position: 'fixed', bottom: 0, width: '100%', opacity: 0.4 }}>
            {/* <p>&copy; {new Date().getFullYear()} Hannah Moran</p> */}
            <Link to="/contact" style={{ verticalAlign: 'top' }}>don't be a stranger: </Link>
            <Link to="https://www.linkedin.com/in/hannah-p-moran/" style={{ marginRight: '1px' }}><img src={linkedin} style = {{width: '20px'}}/></Link>
            <Link to="https://github.com/hannahpmoran" style={{ marginRight: '1px' }}><img src={github} style = {{width: '20px'}}/></Link>
        </footer>

    );
}

export default Footer;
