import React, { useState, useEffect } from "react";
import SinglePopularRide from "./SinglePopularRide";
import "./popularRides.css";
import { Link } from "react-router-dom";
import axios from "axios";

const PopularRides = () => {
  const [show, setShow] = useState(false);
  const [popularRides, setPopularRides] = useState([]);

  useEffect(() => {
    const fetchPopularRides = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/publishride");
        setPopularRides(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPopularRides();
  });
  return (
    <>
      <section className="popularRides">
        <div className="container">
          <h2>Our Popular and Latest Rides</h2>
          <div className="row popularRidesRow">
            <SinglePopularRide GoingFrom="Peshawar" GoingTo="Islamabad" />
            <SinglePopularRide GoingFrom="Lahore" GoingTo="Peshawar" />
            <SinglePopularRide GoingFrom="Karachi" GoingTo="Lahore" />
            <SinglePopularRide GoingFrom="Islamabad" GoingTo="Abbottabad" />
          </div>
          {show ? (
            <div>
              <div className="row popularRidesRow">
                <SinglePopularRide GoingFrom="Multan" GoingTo="Mansehra" />
                <SinglePopularRide GoingFrom="Muree" GoingTo="Kohat" />
                <SinglePopularRide GoingFrom="Battagram" GoingTo="Thakot" />
                <SinglePopularRide GoingFrom="Thakot" GoingTo="Chattar plan" />
              </div>
            </div>
          ) : null}

          <div className="see-more">
            <Link to="">
              <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
              >
                {show ? "See Less" : "See More"}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularRides;
