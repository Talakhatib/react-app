import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Category from '../components/Category';
import './Home.css';

const Home = () => {
  return (
    <div className='bg-color'>
      <Header />
      <div className="container">
        <div>
          {/* <img src="/assets/newimmy.png" weight="300" height="300" alt=""/> */}
        </div>

        <div >
          <p class="display-1 fw-bolder px-2">Work</p>
          <div class="ms-1 text-md-start"> Come Train With Me, We will <br />Get You GYM Smart In No Time</div>
        </div>
        <div class="ms-1 ">
          <p>Lets go</p>
        </div>
      </div>

      <div>
         {/* <Category title="Articles" /> */}
         <div class="container mt-4">
          <h5>Articles</h5>
          <div class="row">
            <div class="col-md-6">
              <img src="/assets/hiking.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-4 align-items-stretch">
                   <img src="/assets/art1.jpg" class="img-fluid mt-2" alt=""/>
                </div>
                 <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center w-50 mt-2 bg-white">
                    <div> 
                      <p class="fs-6 fst-normal text-capitalize"> 5 ways to tone your belly</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 align-items-stretch">   
                       <img src="/assets/art2.jpg" class="img-fluid mt-2" alt=""/>
                  </div>
                  <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center  w-50 mt-2 bg-white">
                    <div>
                      <p class="fs-6 fst-normal text-capitalize">5 ways to tone your belly</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 align-items-stretch">
                       <img src="/assets/art3.jpg" class="img-fluid mt-2" alt=""/>
                  </div>
                  <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center w-50 mt-2 bg-white">
                    <div>
                      <p class="fs-6 fst-normal text-capitalize">5 ways to tone your belly</p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4 d-flex align-items-center w-50 mt-md-2 bg-white">
                    <div>
                      <p class="fs-6 fst-normal text-capitalize">5 ways to tone your belly</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* Additional categories */}
    </div>
  );
};

export default Home;