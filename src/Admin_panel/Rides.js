import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchedCard from "../components/Search/SearchedCard";

const Rides = () => {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    const getPublishRides = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/publishride");
        setRides(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPublishRides();
  }, []);
  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        <h2>Total Rides</h2>
        {rides.map((ride, index) => {
          const { goingfrom, goingto, date, name } = ride;
          return (
            <SearchedCard
              goingfrom={goingfrom}
              goingto={goingto}
              date={date}
              name={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rides;
