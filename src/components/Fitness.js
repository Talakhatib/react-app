import React from 'react';
import './Fitness.css';
import categories from './categorydata'; // Assuming you have the people data array

const Fitness = () => {
  const filter_category = 'fitness'; // Example age to filter

  const filteredcategory = categories.filter((category) => category.categoryname === filter_category);
    return (
    <div className="container mt-4 mb-4">
       <h3 className='fw-bold mb-4'>FITNESS VIDEOS</h3>
      <div className="row">
      {filteredcategory.map((category) => (

        <div className="col-md-4 mb-4" key={category.id}>
          <a href={`content/${category.id}/`} className='text-decoration-none text-black' >
            <div className="text-left">
              <div className='position-relative'>
                <img src={category.image} alt="First Image" className="img-fluid" />
                <div className="position-absolute top-50 start-50 translate-middle">
                  <img src="/assets/arrow.svg" alt="" className="img-fluid" />
                </div>
              </div>
              <h4 className='mt-2'>{category.title}</h4>
              <p className="mt-2 fw-bolder">{category.text} </p>
            </div>
          </a>

        </div>
         ))}
      </div>
    </div>
    );
  };
  
  export default Fitness;