import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Content = () => {
  return (
    <div className='bg-color'>
      <Header />
      <h1>Content Page</h1>
      {/* Content based on selected category */}
      <Footer />
    </div>
  );
};

export default Content;