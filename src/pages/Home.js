import React from 'react';
import Header from '../components/Header';
import Landingpage from '../components/Landingpage'
import Swipperbanner from '../components/Swipperbanner';
import Articles from '../components/Articles'
import Mealrecipes from '../components/Mealrecipes';
import Fitness from '../components/Fitness';
import Footer from '../components/Footer'
import './Home.css';

const Home = () => {
  const slides = [
    { imageUrl: '/assets/hiking.jpg' },
    { imageUrl: 'fitness1.jpg' },
    // Add more slide objects as needed
  ];

  return (
    <div className='bg-color'>
      <Header />
      <Landingpage />
      {/* <Swipperbanner slides={slides} /> */}
      <Articles />
      <Mealrecipes />
      <Fitness/>
      <Footer />
    </div>
  );
};

export default Home;