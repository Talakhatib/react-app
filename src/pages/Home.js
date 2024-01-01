import React from 'react';
import Header from '../components/Header';
import Landingpage from '../components/Landingpage'
import Swipper from '../components/Swipper';
import Articles from '../components/Articles'
import Fitness from '../components/Fitness';
import Footer from '../components/Footer'
import './Home.css';

const Home = () => {

  return (
    <div className='bg-color'>
      <Header />
      <Landingpage />
      <Articles />
      <Swipper/>
      <Fitness/>
      <Footer />
    </div>
  );
};

export default Home;