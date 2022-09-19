import React, { useState, useEffect } from "react";
import SinglePopularRide from "./SinglePopularRide";
import "./popularRides.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import API from "../../API";

const PopularRides = () => {
  const [show, setShow] = useState(false);
  const [popularRides, setPopularRides] = useState([]);

  useEffect(() => {
    const fetchPopularRides = async () => {
      try {
        const { data } = await API.get("publishride");
        setPopularRides(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPopularRides();
  });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="popularRides">
        <div className="container">
          <h2 data-aos="zoom-in" data-aos-duration="1000">
            Our Popular and Latest Rides
          </h2>
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
