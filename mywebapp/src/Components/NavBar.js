import React from 'react';

// import style
import '../App.css';

// import logo
import logo from '../Images/home/logo.png';

const NavigationBar = () => {

  return (
    <div className="navigation-bar">
      {/* <h1 style = {{padding: '10px', fontSize: '30pt'}}><a href = "/">hannah moran</a></h1> */}
      {/* Your navigation links */}
      {/* <img src = {logo} alt = 'logo' style = {{width: '50px', paddingLeft: '10px', paddingTop: '10px', margin: '0'}} ></img> */}
      <ul>
        <li><a href = '/'><img style = {{ width: '50px', margin: '0'}} src = {logo} alt = 'hpm'></img></a></li>
        <li><a href="/" >HOME</a></li>
        <li><a href="/projects" >PROJECTS</a></li>
        <li><a href="/info" >INFO</a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;