import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch, BsArrowDown } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import "./search.css";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const [numberOfAvailableRides, setNumberOfAvailableRides] = useState(0);

  const [formData, setFormData] = useState({
    goingFrom: history.location.state.goingFrom,
    goingTo: history.location.state.goingTo,
    date: history.location.state.date,
    passengerNeeded: history.location.state.passengerNeeded,
  });
  const [publishRides, setPublishRides] = useState([]);
  useEffect(() => {
    setPublishRides(history.location.state.data);

    // lenght of avilable rides
    const rides = publishRides.filter(
      (pr) =>
        pr.goingfrom === formData.goingFrom && pr.goingto === formData.goingTo
    );
    setNumberOfAvailableRides(rides.length);
  }, [
    history.location.state.data,
    publishRides,
    formData.goingFrom,
    formData.goingTo,
  ]);

  return (
    <section className="search">
      <div className="container">
        <div className="searchContent">
          <div className="searchedCities d-flex flex-row justify-content-start align-items-center">
            <div>
              <BsSearch className="searchIcon" />
            </div>
            <div>
              <h5>
                {formData.goingFrom} <AiOutlineArrowRight className="arrow" />{" "}
                {formData.goingTo}
              </h5>
              <span>
                {formData.date}, {formData.passengerNeeded} passenger
              </span>
            </div>
          </div>
          <div className="availableRides">
            <h4>{formData.date}</h4>
            <p>
              {formData.goingFrom} <AiOutlineArrowRight className="arrow" />
              {formData.goingTo}
            </p>
            <span> {numberOfAvailableRides} rides available</span>
          </div>
          {publishRides.map((publishRide, index) => {
            const { goingfrom, goingto, date, name } = publishRide;

            return (
              goingfrom === formData.goingFrom &&
              goingto === formData.goingTo && (
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
                  <div className="cardUser">
                    <FaUserCircle className="userIcon" />
                    <span>{name}</span>
                  </div>
                </div>
              )
            );
            // : (
            //   <div>
            //     <h2>There are no Rides available yet for this Route</h2>
            //   </div>
            // );
          })}
        </div>
      </div>
    </section>
  );
};

export default Search;
