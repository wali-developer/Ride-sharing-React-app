import React, { useState } from 'react';
import SinglePopularRide from './SinglePopularRide';
import './popularRides.css';
import { Link } from 'react-router-dom';

const PopularRides = () => {
  const [show, setShow] = useState(false);
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
            <div className="row popularRidesRow">
              <SinglePopularRide GoingFrom="Multan" GoingTo="Mansehra" />
              <SinglePopularRide GoingFrom="Muree" GoingTo="Kohat" />
              <SinglePopularRide GoingFrom="Battagram" GoingTo="Thakot" />
              <SinglePopularRide GoingFrom="Thakot" GoingTo="Chattar plan" />
            </div>
          ) : null}
          <div className="see-more">
            <Link to="">
              <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
              >
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularRides;
