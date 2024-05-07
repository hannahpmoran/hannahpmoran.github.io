import React from 'react';

// import style
import '../App.css';

// import logo
import logo from '../Images/home/hpm.png';

const NavigationBar = () => {

  return (
    <div className="navigation-bar">
      {/* <h1 style = {{padding: '10px', fontSize: '30pt'}}><a href = "/">hannah moran</a></h1> */}
      {/* Your navigation links */}
      <ul>
        <li><a href = '/'><img style = {{ width: '80px', margin: '0'}} src = {logo} alt = 'hpm'></img></a></li>
        <li><a href="/work">work</a></li>
        <li><a href="/info">info</a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;