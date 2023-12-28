import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <div class="bg-light">
      <Header />
      <Welcome />
      <Banner />
      <Category title="Videos" />
      <Category title="Articles" />
      <Category title="Meal Recipes" />
      {/* Additional categories */}
    </div>
  );
};

export default Home;