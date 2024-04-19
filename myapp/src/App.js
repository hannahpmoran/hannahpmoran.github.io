import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Cv from './Components/cv';
import Portfolio from './Components/Portfolio';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';

function App() {

  return (
      <BrowserRouter>
            <ScrollToTop /> 
            <div className="grain-overlay"></div>
            <Header />

            {/* Routing */}
            <Routes>
              <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/* Add more routes as needed */}
            </Routes>
            
      </BrowserRouter>
  );
}


export default App;