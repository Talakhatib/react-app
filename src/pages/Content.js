import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import categories from '../components/categorydata';
import './Home.css';

const Content = () => {
  const { id } = useParams();
  const selectedcategory = categories.find(category=> category.id === parseInt(id));
  return (
    <div className='bg-color'>
      <Header />
      <div className='container full-height'>
        <h3 className='text-capitalize'>{selectedcategory.title}</h3>
        <h5 className='text-muted text-capitalize'>{selectedcategory.categoryname}</h5>
        <div className='row'>
          <div className='col-md-6 col-12  '>
            <img src={selectedcategory.image} alt="" className='img w-100 img-content' />
            <p className='pt-3 fs-4'>{selectedcategory.text}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;