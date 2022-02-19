import React, { useState } from "react";
import HeaderRideSearch from "./HeaderRideSearch";

const Header = () => {
  const [passengerNeeded, setPassengerNeeded] = useState(0);
  const [show, setShow] = useState(false);

  const plus = () => {
    setPassengerNeeded(passengerNeeded + 1);
  };
  const minus = () => {
    setPassengerNeeded(passengerNeeded - 1);
  };

  // show dropdown content
  const showDropdown = () => {
    setShow(!show);
  };

  return (
    <section>
      <div className="header">
        <div className="row mainRow d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div className="col-12 col-md-6 mainRowCol1">
            <HeaderRideSearch
              plus={plus}
              minus={minus}
              showDropdown={showDropdown}
              show={show}
              passengerNeeded={passengerNeeded}
            />
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
