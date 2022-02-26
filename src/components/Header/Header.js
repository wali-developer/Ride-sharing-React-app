import React from "react";
import HeaderRideSearch from "./HeaderRideSearch";

const Header = () => {
  return (
    <section>
      <div className="header">
        <div className="row mainRow d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div className="col-12 col-md-6 mainRowCol1">
            <HeaderRideSearch />
          </div>
          <div className="col-12 col-md-6 mainRowCol2">
            <img
              src="images/main.svg"
              className="img-fluid"
              alt="Man with Ride"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
