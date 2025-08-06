import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Contacts from "./Contacts";
import Skills from "./Skills";

function Home() {
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
        <div style={{ padding: "0px 10px" }}>
          <About />
          <Skills />
          <Resume />
          <Services />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
