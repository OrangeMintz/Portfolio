import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="profile-img">
          <img
            src="portfolio/assets/img/profile.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>

        <Link
          to="index.html"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Alex Smith</h1>
        </Link>

        <div className="social-links text-center">
          <Link to="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link to="https://facebook.com/OrangeMintz" className="facebook">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link to="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link to="#" className="google-plus">
            <i className="bi bi-skype"></i>
          </Link>
          <Link to="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/home" className="active">
                <i className="bi bi-house navicon"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="bi bi-person navicon"></i> About
              </Link>
            </li>
            <li>
              <Link to="#resume">
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </Link>
            </li>
            <li>
              <Link to="#portfolio">
                <i className="bi bi-images navicon"></i> Portfolio
              </Link>
            </li>
            <li>
              <Link to="#services">
                <i className="bi bi-hdd-stack navicon"></i> Services
              </Link>
            </li>
            <li>
              <Link to="#contact">
                <i className="bi bi-envelope navicon"></i> Contact
              </Link>
            </li>
            
            <li className="dropdown">
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
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Sidebar;