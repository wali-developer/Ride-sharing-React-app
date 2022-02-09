import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import PassengerDetails from './PassengerDetails';

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
            <h2>Search for a Ride</h2>
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Going from..."
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Going to..."
                />
              </div>
              <div className=" mainInnerRow">
                <div className="date">
                  <input type="date" />
                </div>
                <div className="user" onClick={showDropdown}>
                  <FaUser className="userIcon" />
                  <span>{passengerNeeded}</span>
                </div>
                {show ? (
                  <PassengerDetails
                    plus={plus}
                    minus={minus}
                    passengerNeeded={passengerNeeded}
                  />
                ) : null}
                <div className="searchBtn">
                  <Link to="/availablerides">
                    <button
                      className="btn btn-outline-success search"
                      type="submit"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 mainRowCol2">
            <img src="images/main.svg" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
