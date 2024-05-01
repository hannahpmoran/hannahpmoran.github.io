import React from 'react';

// import style
import '../App.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <h1 style = {{padding: '10px'}}><a href = "/">hannah moran</a></h1>
      {/* Your navigation links */}
      <ul>
        <li><a href="/design">design</a></li>
        <li><a href="/photography">photography</a></li>
        <li><a href="/hci">human-computer interaction</a></li>
      </ul>

      <ul style = {{position: 'fixed', bottom: '0'}}>
        <li><a href="/">cv</a></li>
        <li><a href="/about">about</a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;