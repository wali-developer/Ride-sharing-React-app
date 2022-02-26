import React, { useState } from "react";
import PassengerDetails from "./PassengerDetails";
import { FaUser } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import axios from "axios";

const HeaderRideSearch = () => {
  const [passengerNeeded, setPassengerNeeded] = useState(0);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    goingFrom: "",
    goingTo: "",
    date: "",
  });
  const [publishRides, setPublishRides] = useState([]);
  const history = useHistory();

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

  // search handler
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:3001/publishride");
      // setPublishRides(data);
      history.push({
        pathname: "/availablerides",
        state: {
          goingFrom: formData.goingFrom,
          goingTo: formData.goingTo,
          date: formData.date,
          passengerNeeded: passengerNeeded,
          data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2>Search for a Ride</h2>
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="goingFrom"
            placeholder="Going from..."
            onChange={(e) => {
              setFormData({ ...formData, goingFrom: e.target.value });
            }}
            value={formData.goingFrom}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="goingTo"
            placeholder="Going to..."
            onChange={(e) =>
              setFormData({ ...formData, goingTo: e.target.value })
            }
            value={formData.goingTo}
          />
        </div>
        <div className=" mainInnerRow">
          <div className="date">
            <input
              type="date"
              name="date"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              value={formData.date}
            />
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
            <button className="btn btn-outline-success search" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HeaderRideSearch;
