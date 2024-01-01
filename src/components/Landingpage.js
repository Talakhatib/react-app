import React from 'react';
import './Landingpage.css';

const Landingpage = () => {
    return (
      <div className="container">
       <div className='bg-image'>
        <div className="row g-0">
          <div className="col-md-6 col-6">
            <div className="content">
              <p className="fw-bolder large-text">Work</p>
              <p className="ms-1 text-md-start fw-bolder small-text">Come Train With Me, We will <br />Get You GYM Smart In No Time</p>
              <p className="lets-go">Let's go</p>
            </div>
          </div>
          <div className="col-md-6 col-6 position-relative">
            <img src="/assets/newimmy.png" className='img-fluid h-100 w-100 position-absolute top-50 start-50 translate-middle' alt=""/>
          </div>
        </div>
        </div> 
    </div>
    
    );
  };
  
  export default Landingpage;