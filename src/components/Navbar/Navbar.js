import'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'popper.js';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Navbar.css';

const Navbar = props => {
return (
<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <a className="navbar-brand text-md text-light">{props.children}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <div className="ml-auto text-light" >
      <span className="mr-4">Score: {props.score}</span>
      <span className="mr-2">High Score:  {props.highScore}</span>
    </div>
  </div>
</nav>
)
}

export default Navbar;