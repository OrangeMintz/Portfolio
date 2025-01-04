import { useEffect, useState } from "react";
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./sidebar.css";

function Sidebar() {

  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Adjust this to select your sections
    const options = {
      threshold: 0.5, // Adjust this value to your preference
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="profile-img">
          <img
            src="portfolio/assets/img/profile.png"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>

        <Link
          to="index.html"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">D.N. Gacus</h1>
        </Link>

        <div className="social-links text-center">
          <Link to="https://x.com/MintRange" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link to="https://facebook.com/OrangeMintz" className="facebook">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link
            to="https://www.instagram.com/OrangeMint57/"
            className="instagram"
          >
            <i className="bi bi-instagram"></i>
          </Link>
          <Link
            to="https://discordapp.com/users/505809822239948806"
            className="discord"
          >
            <i className="bi bi-discord"></i>
          </Link>
          <Link to="https://github.com/OrangeMintz" className="github">
            <i className="bi bi-github"></i>
          </Link>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#home"
                className={activeSection === "#home" ? "active" : ""}
              >
                <i className="bi bi-house navicon"></i>Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "#about" ? "active" : ""}
              >
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeSection === "#resume" ? "active" : ""}
              >
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>

            {/* <li>
              <a
                href="#portfolio"
                className={activeSection === "#portfolio" ? "active" : ""}
              >
                <i className="bi bi-images navicon"></i> Portfolio
              </a>
            </li> */}
            
            <li>
              <a
                href="#services"
                className={activeSection === "#services" ? "active" : ""}
              >
                <i className="bi bi-hdd-stack navicon"></i> Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={activeSection === "#contact" ? "active" : ""}
              >
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>

            {/* Contact Dropdown */}
            {/* <li className="dropdown">
              <Dropdown>
                <Link to={"#"}>
                  <Dropdown.Toggle variant="dark" className="custom-dropdown">
                    <i className="bi bi-menu-button navicon"></i>
                    <span>Dropdown</span>
                  </Dropdown.Toggle>
                </Link>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Sidebar;