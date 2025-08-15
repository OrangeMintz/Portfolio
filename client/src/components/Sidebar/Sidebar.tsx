import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHash, setActiveHash] = useState("#home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Update active section when scrolling (Home page)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  // Determine if current path is /
  const isHome = location.pathname === "/";

  const isActive = (idOrPath: string) => {
    if (idOrPath.startsWith("/")) return location.pathname === idOrPath;
    return isHome && activeHash === idOrPath;
  };

  const handleNavToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveHash(id);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully.");
      navigate("/control/login");
    } catch (err) {
      console.error("Logout failed:", err);
      toast.error("Failed to logout. Please try again.");
    }
  };

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

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
        <div className="profile-img">
          <a href="/control">
            <img
              src="/portfolio/assets/img/profile.png"
              alt=""
              className="img-fluid rounded-circle"
            />
          </a>
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

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                className={isActive("#home") ? "active" : ""}
                onClick={() => handleNavToSection("#home")}
              >
                <i className="bi bi-house navicon"></i> Home
              </a>
            </li>
            <li>
              <a
                className={isActive("#about") ? "active" : ""}
                onClick={() => handleNavToSection("#about")}
              >
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a
                className={isActive("#skills") ? "active" : ""}
                onClick={() => handleNavToSection("#skills")}
              >
                <i className="bi bi-code-slash navicon"></i> Skills
              </a>
            </li>
            <li>
              <a
                className={isActive("#resume") ? "active" : ""}
                onClick={() => handleNavToSection("#resume")}
              >
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li>
              <a
                className={isActive("#services") ? "active" : ""}
                onClick={() => handleNavToSection("#services")}
              >
                <i className="bi bi-hdd-stack navicon"></i> Services
              </a>
            </li>
            <li>
              <a
                className={isActive("#contact") ? "active" : ""}
                onClick={() => handleNavToSection("#contact")}
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
            <li>
              <a
                href="/certificates"
                className={isActive("/certificates") ? "active" : ""}
              >
                <i className="fa-solid fa-certificate navicon text-xl mr-[9px]"></i>{" "}
                Certificates
              </a>
            </li>
          </ul>

          {currentUser && (
            <ul className="mt-3 px-2">
              <li className="flex items-center justify-between text-sm text-gray-300">
                <span className="truncate max-w-[150px]">
                  {currentUser.email ||
                    currentUser.providerData[0]?.email ||
                    currentUser.displayName ||
                    currentUser.providerData[0]?.displayName}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-600 text-xs ml-2"
                >
                  Log out
                </button>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}

export default Sidebar;
