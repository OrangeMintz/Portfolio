import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("#home");

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Update active section when scrolling (Home page)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Determine if current path is /
  const isHome = location.pathname === "/";
  const currentHash = location.hash || activeHash;

  // Helper to apply "active" class
  const isActive = (idOrPath: string) => {
    if (idOrPath.startsWith("/")) {
      return location.pathname === idOrPath;
    }
    return isHome && currentHash === idOrPath;
  };

  return (
    <>
      <i
        className="header-toggle d-xl-none bi bi-list"
        onClick={toggleSidebar}
      />

      <header
        id="header"
        className={`header dark-background d-flex flex-column ${
          isSidebarOpen ? "show-sidebar" : "hide-sidebar"
        }`}
      >
        {/* <i className="header-toggle d-xl-none bi bi-list"></i> */}
        <div className="profile-img">
          <Link to="/control">
            <img
              src="portfolio/assets/img/profile.png"
              alt=""
              className="img-fluid rounded-circle"
            />
          </Link>
        </div>

        <Link
          to="/"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename text-center" style={{ fontSize: "23px" }}>
            Djeikuje Nickolai Gacus
          </h1>
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
          <Link to="https://github.com/OrangeMintz" className="github ">
            <i className="bi bi-github"></i>
          </Link>
        </div>

        <nav id="navmenu" className="navmenu ">
          <ul>
            <li>
              <a href="/#home" className={isActive("#home") ? "active" : ""}>
                <i className="bi bi-house navicon"></i> Home
              </a>
            </li>
            <li>
              <a href="/#about" className={isActive("#about") ? "active" : ""}>
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a
                href="/#resume"
                className={isActive("#resume") ? "active" : ""}
              >
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li>
              <a
                href="/#services"
                className={isActive("#services") ? "active" : ""}
              >
                <i className="bi bi-hdd-stack navicon"></i> Services
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className={isActive("#contact") ? "active" : ""}
              >
                <i className="bi bi-envelope navicon"></i> Contacts
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={isActive("/projects") ? "active" : ""}
              >
                <i className="bi bi-stack navicon"></i> Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Sidebar;
