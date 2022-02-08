import React from 'react';
import './header.css';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="myNavBar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">
            TrustiCar
          </Link>
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
                <Link to="#" className="nav-link" href="#">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" href="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="navbarButtons d-flex flex-wrap">
              <Link to="/login">
                <button
                  className="btn btn-outline-success login me-2"
                  type="submit"
                >
                  <FaUserAlt className="user" />
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  className="btn btn-outline-success register"
                  type="submit"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
