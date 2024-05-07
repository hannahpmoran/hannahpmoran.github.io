import React from 'react';
import { BrowserRouter} from "react-router-dom";
import './App.css';

// import pages
// import ScrollToTop from './Components/ScrollToTop';
import NavBar from  './Components/NavBar';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {

  return (
    <div>
      <NavBar/>

      <BrowserRouter>     

        <AnimatedRoutes />
        
      </BrowserRouter>
      
      </div>
  );
}


export default App;