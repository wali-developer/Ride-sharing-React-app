import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import "./search.css";
import { useHistory } from "react-router-dom";
import SearchedCard from "./SearchedCard";

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

    // length of avilable rides
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
            const {
              goingfrom,
              goingto,
              date,
              name,
              email,
              status,
              _id,
              passenger,
            } = publishRide;
            console.log(publishRide);
            return (
              goingfrom === formData.goingFrom &&
              goingto === formData.goingTo &&
              passenger > 0 && (
                <SearchedCard
                  index={index}
                  goingfrom={goingfrom}
                  goingto={goingto}
                  name={name}
                  email={email}
                  date={date}
                  status={status}
                  publishRideId={_id}
                  passenger={passenger}
                  formData={formData}
                />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Search;
