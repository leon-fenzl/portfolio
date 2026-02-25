import React from 'react';
import { Switch, BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './style.css'
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Ilust from './Ilust.js'
import Models from './Models.js'
import Contact from './Contact.js'
function App() {
  return (
  <div className="site-grid">
    <div className="bg-blue" id="side1"/>
    <Navbar/>
    <div className="bg-blue" id="nav-side"/>
    <div className="contents">
      <Home/>
      <About/>
      <Ilust/>
      <Models/>
      <Contact/>
    </div>
    <div className="bg-blue" id="side2"/>
  </div>
  );
}

export default App;
