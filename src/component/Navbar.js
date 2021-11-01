import React from 'react';
import ReactDOM from 'react-dom';
import "./navbar.css"
const Navbar=()=>{
    return (
        <>
       <nav class="navbar navbar-expand-md main">
  <a class="navbar-brand" href="#">ADVERTIZEMENT</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav navbar-right">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>    
    </ul>
  </div>  
</nav>
    </>
    )
}
export default Navbar;
    
