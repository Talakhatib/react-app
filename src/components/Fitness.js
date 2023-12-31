import React from 'react';
import './Fitness.css';

const Fitness = () => {
    return (
    <div className="container mt-4">
       <h5 className='fw-bold'>FITNESS VIDEOS</h5>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="text-left">
            <div className='position-relative'>
              <img src="/assets/fitness1.jpg" alt="First Image" className="img-fluid" />
              <div class="position-absolute top-50 start-50 translate-middle">
                <img src="/assets/arrow.svg" alt="" class="img-fluid" />
               </div>
            </div>
            <h4 className='mt-2'>Barbell Squat</h4>
            <p className="mt-2 fw-bolder">Increase leg strength with barbell ful legs. Learn how lift weights and get stronger in this training vidoe. </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-left">
          <div className='position-relative'>
              <img src="/assets/fitness2.jpg" alt="First Image" className="img-fluid" />
              <div class="position-absolute top-50 start-50 translate-middle">
                <img src="/assets/arrow.svg" alt="" class="img-fluid" />
               </div>
            </div>
            <h4 className='mt-2'>Kettlebell PushUp</h4>
            <p className="mt-2 fw-bolder">This is a great way to build a powrful chest with Kettlebel. These are some of the best, and my favorite, push up variations. </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-left">
          <div className='position-relative'>
              <img src="/assets/fitness3.jpg" alt="First Image" className="img-fluid" />
              <div class="position-absolute top-50 start-50 translate-middle">
                <img src="/assets/arrow.svg" alt="" class="img-fluid" />
               </div>
            </div>
            <h4 className='mt-2'>Boxing</h4>
            <p className="mt-2 fw-bolder">Its time to cursh calories with this boxing workout. No muscle is letf untouched in this powerful sweet sesh. </p>
          </div>
        </div>
        {/* Add more similar blocks for additional images */}
      </div>
    </div>
    );
  };
  
  export default Fitness;