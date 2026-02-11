import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
  <Navbar />
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/ilust' component={Ilust}/>
    <Route path='/models' component={Models}/>
    <Route path='/contact' component={Contact}/>
  </Switch>
  </>
  );
}

export default App;
