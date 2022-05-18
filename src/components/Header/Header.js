import React, { useEffect } from "react";
import HeaderRideSearch from "./HeaderRideSearch";
import AOS from "aos";

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <div className="header">
        <div className="row mainRow d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div className="col-12 col-md-6 mainRowCol1">
            <HeaderRideSearch />
          </div>
          <div
            className="col-12 col-md-6 mainRowCol2"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src="images/main.svg"
              className="img-fluid"
              alt="Man with Ride"
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 240"
        style={{ marginTop: "-10%" }}
      >
        <path
          fill="#898DFF"
          fill-opacity="1"
          d="M0,32L120,74.7C240,117,480,203,720,218.7C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Header;
