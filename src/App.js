import React from 'react';
import { Switch, BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './style.css';
import Navbar from './Components/Navbar.js';
import Works from './Pages/Works.js';
import About from './Pages/About.js';
import Footer from './Components/Footer.js';
function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Works/>
    <Footer/>
    </>
  );
}

export default App;