import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light"> 
          <div className='container-fluid'>
            <a className="navbar-brand" href="#">
              <img src="/assets/logo.svg" width="50" height="50" alt=""/>
              <span className="h5">Shape</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
            <li className="nav-item active">
              <a className="nav-link fs-5" href="/">Home </a>
            </li>
           <li className="nav-item">
             <a className="nav-link fs-5" href="#">Recipes</a>
           </li>
           <li className="nav-item">
             <a className="nav-link fs-5" href="#">Videos</a>
           </li>
           <li className="nav-item">
             <a className="nav-link fs-5" href="#">Music</a>
           </li>
          </ul>
         </div>
        </div>
       </nav>
      </header>
    );
  };

  export default Header;