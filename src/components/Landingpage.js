import React from 'react';
import './Landingpage.css';

const Landingpage = () => {
    return (
      <div className="container">
       <div className='bg-image'>
        <div className="row g-0">
          <div className="col-md-6 col-6">
            <div class="content">
              <p class="fw-bolder large-text">Work</p>
              <p class="ms-1 text-md-start fw-bolder small-text">Come Train With Me, We will <br />Get You GYM Smart In No Time</p>
              <p class="lets-go">Let's go</p>
            </div>
          </div>
          <div className="col-md-6 col-6 position-relative">
            <img src="/assets/newimmy.png" className='img-fluid position-absolute top-50 start-50 translate-middle' alt=""/>
          </div>
        </div>
        </div> 
    </div>
    
    );
  };
  
  export default Landingpage;