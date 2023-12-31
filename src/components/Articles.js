import React from 'react';
import './Articles.css';

const Articles = () => {
    return (
      <div className="container mt-5">
      <h3 className='fw-bold mb-4'>TOP ARTICLES</h3>
      <div className="row ">
        <div className="col-md-8 col-12 position-relative">
          <img src="/assets/hiking.jpg" className="img-fluid" alt=""/>
            <div className="text-block">
                <h4 className='fw-bold image-h4-text'>Lifestyle</h4>
                <h3 className='fw-bold image-h3-text'>10 Benifits of Hiking:</h3>
                <h3 className='fw-bold image-h3-text'>Exercise in the Great Outdoors</h3>
            </div>
        </div>
        <div className="col-md-4 col-12 mt-md-0 mt-2">
            <div className="row g-0 mb-2">
                <div className="col-md-3 col-3">
                    <img src="/assets/art1.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-9 col-9 bg-white p-2 fw-bold text-capitalize">
                    5 ways to tone your belly
                </div>
            </div>
            <div className="row g-0 mb-2">
                <div className="col-md-3 col-3">
                    <img src="/assets/art2.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-9 col-9 bg-white p-2 fw-bold text-capitalize">
                    diet foods you didn't know you could eat.
                </div>
            </div>
            <div className="row g-0 mb-2">
                <div className="col-md-3 col-3">
                    <img src="/assets/art3.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-9 col-9 bg-white p-2 fw-bold text-capitalize">
                    the history of arnold schwarzenegger
                </div>
            </div>
            <div className="mb-3">
                <button className='btn btn-danger w-100'>All Articles</button>
            </div>
        </div>
      </div>
    </div>
   
    );
  };
  
  export default Articles;