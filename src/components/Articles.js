import React from 'react';
import './Articles.css';
import categories from './categorydata'; // Assuming you have the people data array

const Articles = () => {


  const filter_category = 'article'; // Example age to filter

  const filteredcategory = categories.filter((category) => category.categoryname === filter_category);
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
        {filteredcategory.map((category) => (
          <a href={`content/${category.id}/`} className='text-decoration-none text-black' key={category.id}>
            <div className="row g-0 mb-2">
                <div className="col-md-3 col-3">
                    <img src={category.image} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-9 col-9 bg-white p-2 fw-bold text-capitalize">
                   {category.title}
                </div>
            </div>
            </a>
            ))}
            <div className="mb-3">
                <button className='btn btn-danger w-100'>All Articles</button>
            </div>
        </div>
      </div>
    </div>
   
    );
  };
  
  export default Articles;