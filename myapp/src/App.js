import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// import pages
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Cv from './Components/cv';
import Photography from './Components/Photography';
import Design from './Components/Design';
import Code from './Components/Code';

function App() {

  return (
      <BrowserRouter>

            {/* Scroll To Top Components */}
            <ScrollToTop /> 

            {/* Grain overlay on site */}
            <div className="grain-overlay"></div>

            {/* Header Component on whole site */}
            <Header />

            {/* Routing */}
            <Routes>
              <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/design" element={<Design />} />
                <Route path="/code" element={<Code />} />
                {/* Add more routes as needed */}
            </Routes>
            
      </BrowserRouter>
  );
}


export default App;