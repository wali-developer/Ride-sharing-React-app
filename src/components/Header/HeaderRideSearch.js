import React from "react";
import PassengerDetails from "./PassengerDetails";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderRideSearch = ({
  plus,
  minus,
  showDropdown,
  show,
  passengerNeeded,
}) => {
  return (
    <>
      <h2>Search for a Ride</h2>
      <form>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Going from..." />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Going to..." />
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
              <button className="btn btn-outline-success search" type="submit">
                Search
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default HeaderRideSearch;
