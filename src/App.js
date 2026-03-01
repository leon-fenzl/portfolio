import React from 'react';
import { Switch, BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './style.css';
import Navbar from './Components/Navbar.js';
import Works from './Pages/Works.js';
import About from './Pages/About.js';
import Contact from './Components/Contact.js';
function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Works/>
    <Contact/>
    </>
  );
}

export default App;