import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient"> 
          <a class="navbar-brand" href="#">
            <img src="/assets/logo.svg" width="30" height="30" alt=""/>
             <span class="h6">Shape</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto " >
            <li class="nav-item active ">
              <a class="nav-link text-center " href="/">Home </a>
            </li>
           <li class="nav-item ">
             <a class="nav-link text-center" href="/content">Content</a>
           </li>
          </ul>
         </div>
       </nav>
      </header>
    );
  };

  export default Header;