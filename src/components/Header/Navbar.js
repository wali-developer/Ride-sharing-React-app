import React from 'react';
import './header.css';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <section className="myNavBar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TrustiCar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              // style={{--bsScrollHeight: "100px"}}
            >
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="navbarButtons d-flex">
              <button
                className="btn btn-outline-success login me-2"
                type="submit"
              >
                <FaUserAlt className="user" />
                Login
              </button>
              <button
                className="btn btn-outline-success register"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
