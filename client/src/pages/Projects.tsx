import { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
const Projects = () => {
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
        <section className="section">
          <div className="container">
            <h2 className=" text-center">WORK IN PROGRESS</h2>
            <p className=" text-center">
              This page is still under construction.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
