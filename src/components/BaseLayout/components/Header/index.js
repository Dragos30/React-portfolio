//Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
  
      <div className="rotate"> 
      <div>
        <Rotate>
          <img id="me" src="Me2.png" alt="logo"></img>
        </Rotate>
      </div>
      <div>
        <Rotate>
          <img id="react" src="logo512.png" alt="react" width="30%"></img>
        </Rotate>
        </div>
      </div>
    
    <h1>My Work</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/">Knowledge</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/portfolio">Experience</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/contact">Contact</NavLink></p>
    </div>
  </div>
)

export default Header;
