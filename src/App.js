import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './Components/Navbar.js';
import Works from './Pages/Works.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import SculpStudies from './Pages/SculpStudies.js';
import Home from './Pages/Home.js';
import sculpt1 from "./Images/leon-fenzl-daily-sculpt.jpg"
import sculpt2 from "./Images/leon-fenzl-esboco-elfa.jpg"
import sculpt3 from "./Images/leon-fenzl-esboco-elfa-2.jpg"
import sculpt4 from "./Images/leon-fenzl-female-base.jpg"
import sculpt5 from "./Images/leon-fenzl-male-base.jpg"
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="" element={<Home bgImgs={[sculpt1,sculpt2,sculpt3,sculpt4,sculpt5]}/>} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />

          <Route path="sculpstudies" element={<SculpStudies/>} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes> 
      </Router>
    </>

  );
}

export default App;
/*
          <Route path="contact" element={<Contact />} />
*/