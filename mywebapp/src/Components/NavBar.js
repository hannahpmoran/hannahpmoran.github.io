import React from 'react';

// import style
import '../App.css';

// import logo
// import logo from '../Images/home/logo.png';

const NavigationBar = () => {

  return (
    
    <div style = {{ display: 'flex',  alignItems: 'flex-start' }} >
      
      
      <div className="navigation-bar">
          {/* <div><a href = '/'><img style = {{ width: '60px' }} src = {logo} alt = 'hpm'></img></a></div> */}
          <div><a href="/" className='navigation-bar-text' >HOME</a></div>
          <div style = {{padding: '10px'}}></div>
          <div><a href="/info" className='navigation-bar-text' >INFO</a></div>
          <div style = {{padding: '10px'}}></div>
          <div><a href="/projects" className='navigation-bar-text' >WORK</a></div>
          
      </div>
      <div style = {{ display: 'flex', alignItems: 'flex-start'}}>
        
          <div className='navigation-bar-text-2'>2022-<br></br>2024</div>
      </div>

     

    </div>
          
          
  );
};

export default NavigationBar;