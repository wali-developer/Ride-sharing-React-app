import React, { useState } from "react";
import PassengerDetails from "./PassengerDetails";
import { FaUser } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import axios from "axios";
import places from "../../placesApi/places.js";
import { toast } from "react-toastify";
import AOS from "aos";
import API from "../../API";

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
      if (
        formData.goingFrom.length > 0 &&
        formData.goingTo.length > 0 &&
        formData.date.length > 0
      ) {
        const { data } = await API.get("publishride");
        // setPublishRides(data);
        history.push({
          pathname: "/availablerides",
          state: {
            goingFrom: formData.goingFrom,
            goingTo: formData.goingTo,
            date: formData.date,
            passengerNeeded: passengerNeeded,
            data: data,
          },
        });
      } else {
        toast.warn("Please fill all the fields");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section data-aos="fade-right" data-aos-duration="1200">
      <h2>Search for a Ride</h2>
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="mb-3">
          <select
            type="text"
            className="form-control"
            name="goingFrom"
            placeholder="Going from..."
            onChange={(e) => {
              setFormData({ ...formData, goingFrom: e.target.value });
            }}
            value={formData.goingFrom}
          >
            {places.map((place) => {
              const { id, location } = place;
              return <option key={id}>{location}</option>;
            })}
          </select>
        </div>
        <div className="mb-3">
          <select
            type="text"
            className="form-control"
            name="goingTo"
            placeholder="Going to..."
            onChange={(e) =>
              setFormData({ ...formData, goingTo: e.target.value })
            }
            value={formData.goingTo}
            required
          >
            {places.map((place) => {
              const { id, location } = place;
              return <option key={id}>{location}</option>;
            })}
          </select>
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
    </section>
  );
};

export default HeaderRideSearch;
