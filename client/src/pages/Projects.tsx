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
      <div>
        <main className="main">Hello World</main>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
