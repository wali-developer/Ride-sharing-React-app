import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const SearchedCard = ({ index, goingfrom, goingto, name, date, email }) => {
  const history = useHistory();

  const handleBook = () => {
    history.push({
      pathname: "/availablerides/book",
      state: {
        goingfrom,
        goingto,
        name,
        date,
        email,
      },
    });
  };
  return (
    <div className="searchCard" key={index}>
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
          <span>{date.toString()}</span>
        </div>
      </div>
      <div style={{ textAlign: "right" }} className="my-2">
        <button className="btn btn-primary" onClick={handleBook}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SearchedCard;
