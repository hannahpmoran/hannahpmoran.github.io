import React from 'react';
import { BrowserRouter} from "react-router-dom";
import './App.css';

// import pages
// import ScrollToTop from './Components/ScrollToTop';
import NavBar from  './Components/NavBar';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Background from './Components/Background'

function App() {

  return (
    <div>


      
      <NavBar/>

      <Background/>
      {/* <div class="background"></div> */}

      <BrowserRouter>     

        <AnimatedRoutes />
        
      </BrowserRouter>

      
      
      </div>
  );
}


export default App;