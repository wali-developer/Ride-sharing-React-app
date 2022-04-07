import React, { useEffect } from "react";
import "./header.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    window.addEventListener("scroll", fixedNavbar);
  }, []);

  // to fix the navbar when scrolling down
  const fixedNavbar = () => {
    if (window.scrollY >= "45") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <section className="myNavBar">
      <nav
        className={
          show
            ? "navbar fixed-top navbarbg navbar-expand-lg navbar-light"
            : "navbar navbar-expand-lg navbar-light"
        }
        id="fixedNavbar"
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
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
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link" href="#">
                  Search
                </Link>
              </li>
            </ul>
            {!user ? (
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
            ) : (
              <div class="btn-group navbarButtons me-2">
                <UserMenu user={user} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
