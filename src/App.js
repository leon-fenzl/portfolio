import React from 'react';
import { Switch, BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './style.css';
import Navbar from './Components/Navbar.js';
import About from './Pages/About.js';
import Concepts from './Pages/Concepts.js';
import Models from './Pages/Models.js';
import Games from './Pages/Games.js';
import Contact from './Pages/Contact.js';
function App() {
  return (
  <div className="site-grid">
    <div id="side1"/>
    <Navbar/>
    <div id="nav-side"/>
    <div className="contents">
      <About/>
      <Concepts/>
      <Models/>
      <Games/>
      <Contact/>
    </div>
    <div id="side2"/>
  </div>
  );
}

export default App;
