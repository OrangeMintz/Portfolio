import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import 'aos/dist/aos.css';
import AOS from "aos";
import { ReactTyped } from 'react-typed';
import About from './About';
import Resume from './Resume';
import Services from './Services';



function Home() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      // easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main">
        <section id="home" className="hero section dark-background">
          <img
            src="portfolio/assets/img/Ougi.jpg"
            alt=""
            className=""
            data-aos="fade-in"
          />
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <h2>Djeikuje Nickolai C. Gacus</h2>
            <p>
              {"Currently learning "}
              <ReactTyped
                strings={[
                  "Web Technologies",
                  "IoT Driven Projects",
                  "Ethical Hacking",
                ]}
                startDelay={500}
                typeSpeed={40}
                backSpeed={50}
                backDelay={2000}
                loop
              >
                <span className="typed" />
              </ReactTyped>
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              ></span>
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              ></span>
            </p>
          </div>
        </section>

        <About />

        <Resume />

        <Services/>
      </main>

      <Footer />
    </>
  );
};

export default Home;