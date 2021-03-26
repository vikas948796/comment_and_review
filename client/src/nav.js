import React from 'react';
import './App.css';
import { HashLink as Link } from 'react-router-hash-link';
//import  { useHistory } from 'react-router-dom';
import './nav.css';
const Navbar = () => {
    
    return(

      
      <nav class="navbar navbar-expand-md  navbar-darnavbar fixed-top navbar-expand-md navbar-dark scrolling-navbar" style={{zIndex:'5',backgroundColor:'#2e2e2e'}}>
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"  data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="home">Home</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="about">About</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="career">Carieer</Link>
      </li>  
      
      
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" style={{color:"white"}} href="#">Solution</a>
          <div class="dropdown-menu">
          <span style={{fontSize:"14.4px",color:"black"}}>  <Link class="dropdown-item" className="nav-link js-scroll-trigger" id="navcolor1" to="market">Market</Link></span>
          <span style={{fontSize:"14.4px",color:"black"}}>  <Link class="dropdown-item" className="nav-link js-scroll-trigger" id="navcolor1" to="advertiser">Advertiser</Link></span>
        </div>
        </li>
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="blog">Blog</Link>
      </li>  
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="contact">Contact</Link>
      </li>
    </ul>
  </div>  
</nav>












    );
}

export default Navbar;