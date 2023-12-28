import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
      <div >
        <div className="split-right">
          <img src="/assets/newimmy.png" class="img-fluid rounded float-start" alt=""/>
        </div>

        <div className='split-left'>
          <p className="largeWord">Work</p>
          <div> Come Train With Me, We will <br />Get You GYM Smart In No Time</div>
        </div>
        
      </div>
    );
  };
  
  export default Welcome;