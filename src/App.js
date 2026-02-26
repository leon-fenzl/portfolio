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
    <div className='grid-site'>
      <div id="c1"/>
      <nav className='sidebar' id='c2'>
        <div className='buffer'/>
        <div className="logo">
        <h1>
        <a href='/' className="logo-pc">LEÓN FENZL</a>
        <a href='/' className="logo-mob">LEÓN</a>
        <a href='/' className="logo-mob">FENZL</a>
        </h1>
        <h3 className='title'>
          <span>Game Artist </span> 
          & 
          <span> Programmer</span>
        </h3>
        </div>
        <div className='nav-options'>
        <a href='#about' className="nav-option"><h4>About</h4></a>
        <a href='#about' className="nav-option"><h4>Concepts</h4></a>
        <a href='#about' className="nav-option"><h4>Models</h4></a>
        <a href='#about' className="nav-option"><h4>Contact</h4></a>
        </div>
      </nav>
      <main id="c3">
        <section>
          <div className='buffer'/>
          <h2>About</h2>
        </section>
        <footer>
          <h2>
            All works here presented, belong to<span> León Fenzl </span>
            and/or his clients.
          </h2>
        </footer>
      </main>
      <div id="c4"/>
    </div>
    </>
  );
}

export default App;