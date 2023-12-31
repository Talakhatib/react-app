import React, { useRef, useEffect } from 'react';
import 'swiper/css';
import Swiper from 'swiper';

const Swipperbanner = ({ slides }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
        },
        // Add other Swiper configurations as needed
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide">
            <img src={slide.imageUrl} alt={`Slide ${index}`} />
            {/* Add any additional content here */}
          </div>
        ))}
      </div>
      {/* Add pagination and navigation if needed */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Swipperbanner;
