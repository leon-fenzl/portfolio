import React from 'react';
import './style.css';
import Navbar from './Components/Navbar.js';
import Works from './Pages/Works.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<p>404 Not Found</p>} />
    </Routes> 
    </Router>
    </>

  );
}

export default App;