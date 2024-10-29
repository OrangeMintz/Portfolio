import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <div id="hero" className="hero section dark-background">
            <img src="portfolio/assets/img/hero-bg.jpg" alt="" className=""/>

            <div className="container" data-aos-delay="100">
              <h2>Alex Smith</h2>
              <p>{"I'm"} <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;