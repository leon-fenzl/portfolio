import React from 'react';
import { Switch, BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './style.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Sidebar from './Components/Sidebar.js';
import About from './Pages/About.js';
import Concepts from './Pages/Concepts.js';
import Models from './Pages/Models.js';
import Games from './Pages/Games.js';
import Contact from './Pages/Contact.js';
function App() {
  return (
    <>
      <nav className='grid-site'>
        <div className='side1'/>
        <div className='container navbar'>
          <h1 className='logo'>
          <a href='/' className='logo-pc'><span>LEÓN FENZL</span></a>
          <a href='/' className='logo-mob'>
            <span>LEÓN</span>
            <span>FENZL</span>
          </a>
          </h1>
          <h3 className='nav-options'>
            <a href='#about'>About</a>
            <a href='#concepts'>Concepts</a>
            <a href='#models'>Models</a>
            <a href='#games'>Games</a>
            <a href='#contact'>Contact</a>
          </h3>
        </div>
        <div className='side2'/>
      </nav>
      <main className='grid-site content'>
        <div className='side1'/>
        <div className='container'>
        <section id='about'>
          <div className='buffer'/>
          <h2>About</h2>
        </section>
        <section id='concepts'>
          <div className='buffer'/>
          <h2>Concepts</h2>
        </section>
        <section id='models'>
          <div className='buffer'/>
          <h2>Models</h2>
        </section>
        <section id='games'>
          <div className='buffer'/>
          <h2>Games</h2>
        </section>
        <section id='contact'>
          <div className='buffer'/>
          <h2>Contact</h2>
        </section>
        </div>
        <div className='side2'/>
      </main>
    </>
  );
}

export default App;