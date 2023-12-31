import React from 'react';
import './Mealrecipes.css';

const Mealrecipes = () => {
    return (
    <div className="container mt-4">
      <h3 className='fw-bold mb-4'>MEAL RECIPES</h3>
      <div className="container">
      <div className="row">
        <div className="col-md-3 mb-3">
        <div className='position-relative h-100'>
          <img src="/assets/steaks.jpg" alt="" className="img-fluid img-border h-100 img-hover"/>
          <div class="text-image">
            <h5>Steaks with goulash sauce & sweet potato</h5>
            <p>Enjoy fillet steak with sauce for healthy dinner...</p>
            <div className='text-container'>
             <p className='try bg-danger'>Try</p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
         <div className='position-relative h-100'>
          <img src="/assets/Acquacotta.jpg" alt="" className="img-fluid h-100 img-border img-hover"/>
          <div class="text-image">
            <h5>Acquacotta</h5>
            <p className='pb-4'>Acqacotta is a hot broth-based bread soup in...</p>
            <div className='text-container'>
             <p className='try bg-danger'>Try</p>
            </div>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-3">
         <div className='position-relative h-100'>
          <img src="/assets/duck.jpg" alt="" className="img-fluid h-100 img-border img-hover"/>
          <div class="text-image">
            <h5>Duck ragu with pappardelle & swede</h5>
            <p>There's nothing like a hearty bowl of pasta... </p>
            <div className='text-container'>
             <p className='try bg-danger'>Try</p>
            </div>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-3">
         <div className='position-relative h-100'>
          <img src="/assets/chicken.jpg" alt="" className="img-fluid h-100 img-border img-hover"/>
          <div class="text-image">
            <h5>Jerk chicken salad with papaya</h5>
            <p>This is very easy Caribbean papaya salas recipe...</p>
            <div className='text-container'>
             <p className='try bg-danger'>Try</p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    </div>
    );
  };
  
  export default Mealrecipes;