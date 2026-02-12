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
  <>
  <Router>
  <Navbar />
  <main>
    <div id="side1"/>
    < Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/ilust' element={<Ilust/>}/>
      <Route path='/models' element={<Models/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <div id="side2"/>
  </main>
  </Router>
  </>
  );
}

export default App;
