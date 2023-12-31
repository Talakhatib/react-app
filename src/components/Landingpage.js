import React from 'react';
import './Landingpage.css';

const Landingpage = () => {
    return (
     <div className="container">
        <div className="row g-0">
          <div className="col-md-6 col-6"> 
            <p className="fw-bolder large-text">Work</p>
            <p className="ms-1 text-md-start fw-bolder small-text"> Come Train With Me, We will <br />Get You GYM Smart In No Time</p>
            <p className="">Lets go</p>
          </div>
           <div class="col-md-6 col-6">
             <img src="/assets/newimmy.png" className='img-fluid' alt=""/>
           </div>
        </div>
      </div>
    );
  };
  
  export default Landingpage;