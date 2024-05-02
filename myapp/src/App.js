import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// import pages
import ScrollToTop from './Components/ScrollToTop';
import Home from './Components/Home';
import Info from './Components/Info';
import Photography from './Components/Photography';
import Design from './Components/Design';
import HCI from './Components/HCI';
import NavBar from  './Components/NavBar';
import Work from  './Components/Work';

function App() {

  return (
      <BrowserRouter>

            {/* Header Component on whole site */}
            {/* <Header /> */}
            <NavBar />

            {/* Scroll To Top Components */}
            <ScrollToTop /> 

            {/* Grain overlay on site */}
            <div className="grain-overlay"></div>

            {/* Routing */}
            <Routes>
              <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/design" element={<Design />} />
                <Route path="/hci" element={<HCI />} />
                <Route path="/work" element={<Work />} />
                {/* Add more routes as needed */}
            </Routes>
            
      </BrowserRouter>
  );
}


export default App;