import React, { useState, useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AOS from "aos";

const SearchedCard = ({
  index,
  goingfrom,
  goingto,
  name,
  date,
  email,
  status,
  publishRideId,
  passenger,
  formData,
}) => {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleBook = () => {
    if (!user) {
      toast.info("Please Login to Book a Ride", { position: "top-center" });
      history.push("/login");
    } else {
      history.push({
        pathname: "/availablerides/book",
        state: {
          goingfrom,
          goingto,
          name,
          date,
          email,
          status,
          publishRideId,
          formData,
        },
      });
    }
  };

  // initialize animation library
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="searchCard"
      key={index}
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      <p className="text-center">
        <strong style={{ color: "#4F56FF" }}>{passenger}</strong> Passenger
        {passenger > 1 ? "s" : ""} Needed for ride
      </p>
      <div className="searchCard-content row">
        <div className="searchCard-content-col col-sm-2 col-md-2">
          <h5>18:00</h5>
          <p>2hr40</p>
          <h5>20:40</h5>
        </div>
        <div className="searchCard-content-col col-sm-8 col-md-8">
          <h5>
            <GrLocation />
            {goingfrom}
          </h5>
          <BsArrowDown className="my-2" />
          <h5>
            <GrLocation />
            {goingto}
          </h5>
        </div>
        <p className="price col-sm-2 col-md-2">800 pkr</p>
      </div>

      <div className="d-flex justify-content-between align-items-end">
        <div className="cardUser">
          <FaUserCircle className="userIcon" />
          <span>{name}</span>
        </div>
        <div className="cardDate">
          <span>{date}</span>
        </div>
      </div>
      <div className="my-2 mt-3 d-flex justify-content-between">
        <button className="btn primaryBtn" disabled>
          {status}
        </button>
        <button className="btn primaryBtn" onClick={handleBook}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SearchedCard;
