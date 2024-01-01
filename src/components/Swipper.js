import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Swipper.css';
import categories from './categorydata'; // Assuming you have the people data array

const Swipper = ({ slides }) => {


  const filter_category = 'recipes'; // Example age to filter

  const filteredcategory = categories.filter((category) => category.categoryname === filter_category);

  const slidesPerView = {
    320: 1, // 1 slide on small screens
    768: 2, // 2 slides on medium-sized screens
    1024: 4, // 4 slides on larger screens
  };


 return(
    <div className='container mt-4'>
      <h3 className='fw-bold'>MEAL RECIPES</h3>
      <Swiper
      spaceBetween={30}
      slidesPerView={slidesPerView}
      loop={true} // Enable infinite loop
      pagination={{ clickable: true, type: 'bullets' }} // Use bullets pagination
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
        {filteredcategory.map((category) => (
          <SwiperSlide key={category.id}>
            <a href={`content/${category.id}/`} className='text-decoration-none text-black'>
              <img  src={category.image} alt="" className="img-hover"/>
              <div className="text-image">
                <h6>{category.title}</h6>
                <p>{category.text} </p>
                <div className='text-container'>
                <p className='try bg-danger'>Try</p>
                </div>
              </div>
              </a>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipper;
